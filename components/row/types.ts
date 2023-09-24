import type { CSSProperties, ReactNode } from "react";

type Gutters = [colGutter: number, rowGutter: number];
type Gutter = number | Gutters;

export interface RowProps {
  /* children */
  children: ReactNode;

  /* gutter */
  gutter?: Gutter;

  /* justify */
  justify?: CSSProperties["justifyItems"];

  /* align */
  align?: CSSProperties["alignItems"];
}

export interface RowRenderProps extends Pick<RowProps, "justify" | "align"> {
  /* gutters */
  gutters: Gutters;
}
