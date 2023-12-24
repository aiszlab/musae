import type { CSSProperties, ReactNode } from "react";
import type { ComponentProps } from "../../types/element";

export type Gutters = [colGutter: number, rowGutter: number];
type Gutter = number | Gutters;

export interface RowProps extends ComponentProps {
  /* children */
  children?: ReactNode;

  /* gutter */
  gutter?: Gutter;

  /* justify */
  justify?: CSSProperties["justifyItems"];

  /* align */
  align?: CSSProperties["alignItems"];
}

export interface ColProps extends ComponentProps {
  /* span */
  span?: number;

  /* children */
  children?: ReactNode;
}
