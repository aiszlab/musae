import type { WaterfallProps } from "../../types/waterfall";
import React, { useMemo, type ReactNode } from "react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import type { RequiredIn } from "@aiszlab/relax/types";

const styles = $create({
  column: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    rowGap: "var(--row-gap)",
    overflow: "auto",
  },
});

const Sequential = ({
  children,
  columns,
  className,
  style,
}: RequiredIn<Omit<WaterfallProps, "sequential" | "gutter">, "children" | "columns">) => {
  // group children into diff columns
  // if current column do not has any child, mean this column is not need to render
  const groupedColumns = useMemo(() => {
    return children
      .reduce<[ReactNode[][], number]>(
        ([grouped, addedIndex], child) => {
          grouped.at(addedIndex)?.push(child);

          const next = addedIndex + 1;
          return [grouped, next >= columns ? 0 : next];
        },
        [Array.from({ length: columns }, () => []), 0],
      )[0]
      .filter((column) => column.length > 0);
  }, [children, columns]);

  const styled = $props(styles.column);

  return (
    <div className={className} style={style}>
      {groupedColumns.map((column, index) => {
        return (
          <div className={styled.className} style={styled.style} key={index}>
            {column}
          </div>
        );
      })}
    </div>
  );
};

export default Sequential;
