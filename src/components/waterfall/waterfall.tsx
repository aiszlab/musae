import { $create, $props } from "../../utils/styles";
import { sizes } from "../theme/tokens.stylex";
import type { WaterfallProps } from "../../types/waterfall";
import React from "react";
import { useRepaint } from "./hooks";
import { useGutters } from "../../hooks/use-gutters";
import { useMounted, useUpdateEffect } from "@aiszlab/relax";
import Sequential from "./sequential";
import { useClassNames } from "../../hooks/use-class-names";
import { stringify } from "@aiszlab/relax/class-name";
import { CLASS_NAMES } from "./context";

const styles = $create({
  waterfall: (props: { columnGap: number; rowGap: number }) => ({
    width: sizes.full,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
    height: "fit-content",
    columnGap: props.columnGap,
    rowGap: props.rowGap,
    overflow: "hidden",
  }),

  repainted: (props: { maxHeight: number }) => ({
    flexDirection: "column",
    height: props.maxHeight,
  }),

  item: (props: { columns: number; columnGap: number; order: number | null }) => ({
    order: props.order ?? 1,
    width: `calc((100% - ${props.columns - 1} * ${props.columnGap}px) / ${props.columns})`,
    height: "fit-content",
  }),
});

const Waterfall = ({
  columns = 4,
  gutter = 8,
  children = [],
  sequential = false,
  className,
  style,
}: WaterfallProps) => {
  const [columnGap, rowGap] = useGutters({ gutter });
  const { collect, maxHeight, order, items, repaint } = useRepaint({ columns, rowGap });
  const classNames = useClassNames(CLASS_NAMES);

  const styled = $props(
    styles.waterfall({ rowGap, columnGap }),
    !sequential && maxHeight > 0 && styles.repainted({ maxHeight: maxHeight }),
  );

  useUpdateEffect(() => {
    // no need to repaint when `sequential`
    if (sequential) return;
    repaint();
  }, [rowGap]);

  useMounted(() => {
    // no need to observer when `sequential`
    if (sequential) return;

    // observer be called when the component is mounted
    // so in waterfall we use current time to first render
    const resizer = new ResizeObserver(() => {
      repaint();
    });

    Array.from(items.current.values()).forEach((node) => {
      if (!node) return;
      resizer.observe(node);
    });

    return () => {
      resizer.disconnect();
    };
  });

  if (children.length === 0) return null;

  // sequential waterfall
  if (sequential) {
    return (
      <Sequential
        columns={columns}
        children={children}
        rowGap={rowGap}
        className={stringify(classNames.sequential, className, styled.className)}
        style={{
          ...styled.style,
          ...style,
        }}
      />
    );
  }

  return (
    <div
      className={stringify(classNames.waterfall, className, styled.className)}
      style={{
        ...styled.style,
        ...style,
      }}
    >
      {children.map((item, index) => {
        const { className, style } = $props(
          styles.item({ columnGap: columnGap, columns, order: order(index) }),
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
