import React from "react";
import type { RowProps } from "./types";
import { useClassNames } from "../config";
import { ComponentToken, GridClassToken } from "../../utils/class-name";
import clsx from "clsx";
import * as stylex from "@stylexjs/stylex";
import { type Gutters, useGutters } from "../../hooks/use-gutters";

const styles = stylex.create({
  row: (props: { gutters: Gutters; justify: RowProps["justify"]; align: RowProps["align"] }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(24, minmax(0, 1fr))",
    columnGap: props.gutters[0],
    rowGap: props.gutters[1],
    justifyItems: props.justify,
    alignItems: props.align,
  }),
});

const Row = ({ align, children, gutter, justify, className, as: As = "div", ...props }: RowProps) => {
  /// col and row gap in grid
  const gutters = useGutters({ gutter });
  const classNames = useClassNames(ComponentToken.Grid);
  const styled = stylex.props(styles.row({ gutters, justify, align }));

  return (
    <As
      className={clsx(classNames[GridClassToken.Row], className, styled.className)}
      style={{
        ...styled.style,
        ...props.style,
      }}
    >
      {children}
    </As>
  );
};

export default Row;
