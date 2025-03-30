import type { WaterfallProps } from "../../types/waterfall";
import React, { useMemo, type ReactNode } from "react";
import { $create, $props } from "../../utils/styles";
import type { RequiredIn } from "@aiszlab/relax/types";

const styles = $create({
  column: (props: { rowGap: number }) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    rowGap: props.rowGap,
    overflow: "auto",
  }),
});

const Sequential = ({
  children,
  columns,
  className,
  style,
  rowGap,
}: RequiredIn<Omit<WaterfallProps, "sequential" | "gutter">, "children" | "columns"> & {
  rowGap: number;
}) => {
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

  // convert column into react div node
  // inject column styles
  const _children = useMemo(() => {
    const styled = $props(styles.column({ rowGap }));

    return groupedColumns.map((column, index) => {
      return (
        <div className={styled.className} style={styled.style} key={index}>
          {column}
        </div>
      );
    });
  }, [groupedColumns, rowGap]);

  return (
    <div className={className} style={style}>
      {_children}
    </div>
  );
};

export default Sequential;
