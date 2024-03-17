import { isArray } from "@aiszlab/relax";
import { useMemo } from "react";

export type Gutters = [colGutter: number, rowGutter: number];

export type Gutter = number | Gutters;

export const useGutters = ({ gutter }: { gutter?: Gutter }) => {
  /// col and row gap in grid
  const gutters = useMemo<Gutters>(() => {
    if (!gutter) return [0, 0];
    if (isArray(gutter)) return gutter;
    return [gutter, 0];
  }, [gutter]);

  return gutters;
};
