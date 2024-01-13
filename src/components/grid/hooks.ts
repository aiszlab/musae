import { type CSSProperties, useMemo } from "react";
import type { ColProps, Gutters, RowProps } from "./types";

/**
 * @description
 * row style
 */
export const useRowStyle = ([gutters, justify, align, style]: [
  Gutters,
  RowProps["justify"],
  RowProps["align"],
  RowProps["style"]
]) => {
  return useMemo<CSSProperties>(
    () => ({
      display: "grid",
      gridTemplateColumns: "repeat(24, minmax(0, 1fr))",
      columnGap: gutters[0],
      rowGap: gutters[1],
      justifyItems: justify,
      alignItems: align,
      ...style,
    }),
    [gutters, justify, align, style]
  );
};

/**
 * @description
 * col style
 */
export const useColStyle = ([span = 8, style]: [ColProps["span"], ColProps["style"]]) => {
  return useMemo<CSSProperties>(() => {
    return {
      gridColumnStart: "auto",
      gridColumnEnd: `span ${span}`,
      ...style,
    };
  }, [span, style]);
};
