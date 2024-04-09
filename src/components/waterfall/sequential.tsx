import type { WaterfallProps } from "./types";
import React, { useMemo, type ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { StylexProps } from "../../types/element";
import clsx from "clsx";
import { RequiredIn } from "@aiszlab/relax/types";

const styles = stylex.create({
  column: (props: { rowGap: number }) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    rowGap: props.rowGap,
  }),
});

const Sequential = ({
  children,
  columns,
  className,
  style,
  rowGap,
  ...props
}: RequiredIn<Omit<WaterfallProps, "sequential" | "gutter">, "children" | "columns"> & {
  rowGap: number;
} & StylexProps) => {
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
        [new Array<ReactNode[]>(columns).fill([]).map(() => []), 0]
      )[0]
      .filter((column) => column.length > 0);
  }, [children, columns]);

  // convert column into react div node
  // inject column styles
  const _children = useMemo(() => {
    const styled = stylex.props(styles.column({ rowGap }));

    return groupedColumns.map((column) => {
      return (
        <div className={styled.className} style={styled.style}>
          {column}
        </div>
      );
    });
  }, [groupedColumns, rowGap]);

  const styled = stylex.props(props.styles);

  return (
    <div
      className={clsx(className, styled.className)}
      style={{
        ...style,
        ...styled.style,
      }}
    >
      {_children}
    </div>
  );
};

export default Sequential;
