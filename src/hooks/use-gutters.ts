import { useMemo } from "react";

export type Gutters = [columnGutter: number, rowGutter: number];

export type Gutter = number | Gutters;

export const useGutters = ({ gutter }: { gutter: Gutter }) => {
  const columnGutter = typeof gutter === "number" ? gutter : gutter[0];
  const rowGutter = typeof gutter === "number" ? gutter : gutter[1];

  // col gutter and row gutter
  return useMemo<Gutters>(() => [columnGutter, rowGutter], [columnGutter, rowGutter]);
};
