import type { ReactNode } from "react";

type Gutters = [colGutter: number, rowGutter: number];
type Gutter = number | Gutters;

export interface RowProps {
  /* children */
  children: ReactNode;

  /* gutter */
  gutter?: Gutter;
}

export interface RowRenderProps {
  /* gutters */
  gutters: Gutters;
}
