import { create as $create, props as $props } from "@stylexjs/stylex";
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
  waterfall: {
    width: sizes.full,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
    height: "fit-content",
    columnGap: "var(--column-gap)",
    rowGap: "var(--row-gap)",
    overflow: "hidden",
  },

  repainted: {
    flexDirection: "column",
    height: "var(--max-height)",
  },

  item: {
    order: "var(--order)",
    width: `calc((100% - (var(--columns) - 1) * var(--column-gap)) / var(--columns))`,
    height: "fit-content",
  },
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

  const styled = $props(styles.waterfall, !sequential && maxHeight > 0 && styles.repainted);

  // sequential waterfall
  if (sequential) {
    return (
      <Sequential
        columns={columns}
        rowGap={rowGap}
        className={stringify(classNames.sequential, className, styled.className)}
        style={{
          ...styled.style,
          "--max-height": `${maxHeight}px`,
          ...style,
        }}
      >
        {children}
      </Sequential>
    );
  }

  return (
    <div
      className={stringify(classNames.waterfall, className, styled.className)}
      style={{
        ...styled.style,
        "--columns": columns,
        "--max-height": `${maxHeight}px`,
        "--row-gap": `${rowGap}px`,
        "--column-gap": `${columnGap}px`,
        ...style,
      }}
    >
      {children.map((item, index) => {
        const _order = order(index);
        const { className, style } = $props(styles.item);

        return (
          <div
            key={index}
            className={className}
            style={{
              ...style,
              "--column-gap": `${columnGap}px`,
              "--order": _order ?? void 0,
            }}
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
