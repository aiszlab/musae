import React from "react";
import type { RowProps } from "./types";
import { useClassNames } from "../config";
import { ComponentToken, GridClassToken } from "../../utils/class-name";
import clsx from "clsx";
import * as stylex from "@stylexjs/stylex";
import { useGutters } from "../../hooks/use-gutters";

const styles = stylex.create({
  row: (props: { columnGap: number; rowGap: number; justify: RowProps["justify"]; align: RowProps["align"] }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(24, minmax(0, 1fr))",
    columnGap: props.columnGap,
    rowGap: props.rowGap,
    justifyItems: props.justify,
    alignItems: props.align,
  }),
});

const Row = ({ align, children, gutter, justify, className, as: As = "div", style }: RowProps) => {
  /// col and row gap in grid
  const [columnGap, rowGap] = useGutters({ gutter });
  const classNames = useClassNames(ComponentToken.Grid);
  const styled = stylex.props(styles.row({ columnGap, rowGap, justify, align }));

  return (
    <As
      className={clsx(classNames[GridClassToken.Row], className, styled.className)}
      style={{
        ...styled.style,
        ...style,
      }}
    >
      {children}
    </As>
  );
};

export default Row;
