import * as stylex from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import type { WaterfallProps } from "./types";
import React from "react";
import { useRepaint } from "./hooks";
import clsx from "clsx";
import { useGutters } from "../../hooks/use-gutters";
import { useMounted } from "@aiszlab/relax";

const styles = stylex.create({
  waterfall: (props: { columnGap: number; rowGap: number }) => ({
    width: sizes.full,
    display: "flex",
    flexFlow: "row wrap",
    alignContent: "flex-start",
    height: "fit-content",
    columnGap: props.columnGap,
    rowGap: props.rowGap,
    overflow: "hidden"
  }),

  repainted: (props: { maxHeight: number }) => ({
    flexFlow: "column wrap",
    height: props.maxHeight,
  }),

  item: (props: { columns: number; columnGap: number; order: number | null }) => ({
    order: props.order ?? 1,
    width: `calc((100% - ${props.columns - 1} * ${props.columnGap}px) / ${props.columns})`,
    height: "fit-content",
  }),
});

const Waterfall = ({ columns = 4, gutter, children = [], ...props }: WaterfallProps) => {
  const [columnGap, rowGap] = useGutters({ gutter });
  const { collect, maxHeight, getOrder, items, repaint } = useRepaint({ columns, rowGap });

  const styled = stylex.props(
    styles.waterfall({ rowGap, columnGap }),
    maxHeight > 0 && styles.repainted({ maxHeight: maxHeight })
  );

  useMounted(() => {
    // observer will be called when the component is mounted
    // so in waterfall we use current time to first render
    const resizer = new ResizeObserver(() => {
      repaint();
    });

    Array.from(items.current.values()).forEach((node) => {
      node && resizer.observe(node);
    });

    return () => {
      resizer.disconnect();
    };
  });

  if (children.length === 0) return null;

  return (
    <div
      className={clsx(props.className, styled.className)}
      style={{
        ...props.style,
        ...styled.style,
      }}
    >
      {children.map((item, index) => {
        const { className, style } = stylex.props(
          styles.item({ columnGap: columnGap, columns, order: getOrder(index) })
        );

        return (
          <div
            key={index}
            className={className}
            style={style}
            ref={(_ref) => {
              collect(index, _ref);
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Waterfall;
