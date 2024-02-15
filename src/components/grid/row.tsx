import React, { useMemo } from "react";
import type { Gutters, RowProps } from "./types";
import { isArray } from "@aiszlab/relax";
import { useClassNames } from "../config";
import { ComponentToken, GridClassToken } from "../../utils/class-name";
import clsx from "clsx";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  row: (gutters: Gutters, justify: RowProps["justify"], align: RowProps["align"]) => ({
    display: "grid",
    gridTemplateColumns: "repeat(24, minmax(0, 1fr))",
    columnGap: gutters[0],
    rowGap: gutters[1],
    justifyItems: justify,
    alignItems: align,
  }),
});

const Row = ({ align, children, gutter, justify, className, as: As = "div", ...props }: RowProps) => {
  /// col and row gap in grid
  const gutters = useMemo<Gutters>(() => {
    if (!gutter) return [0, 0];
    if (isArray(gutter)) return gutter;
    return [gutter, 0];
  }, [gutter]);

  const classNames = useClassNames(ComponentToken.Grid);
  const styled = stylex.props(styles.row(gutters, justify, align));

  return (
    <As
      className={clsx(styled.className, classNames[GridClassToken.Row], className)}
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
