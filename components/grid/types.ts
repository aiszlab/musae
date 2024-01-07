import type { CSSProperties, ReactNode } from "react";
import type { ComponentProps } from "../../types/element";

export type Gutters = [colGutter: number, rowGutter: number];
type Gutter = number | Gutters;

export interface RowProps extends ComponentProps {
  /**
   * @description
   * children
   */
  children?: ReactNode;

  /**
   * @description
   * gutter
   */
  gutter?: Gutter;

  /**
   * @description
   * justify
   */
  justify?: CSSProperties["justifyItems"];

  /**
   * @description
   * align
   */
  align?: CSSProperties["alignItems"];

  /**
   * @description
   * as
   */
  as?: "div" | "main";
}

export interface ColProps extends ComponentProps {
  /**
   * @description
   * span
   */
  span?: number;

  /**
   * @description
   * children
   */
  children?: ReactNode;

  /**
   * @description
   * as
   */
  as?: "div" | "aside";
}
