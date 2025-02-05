import type { CSSProperties, MouseEvent, ReactNode } from "react";
import type { ComponentProps } from "./element";
import type { Gutter } from "../hooks/use-gutters";

export interface RowProps extends ComponentProps {
  /**
   * @description
   * children
   * @default void 0
   */
  children?: ReactNode;

  /**
   * @description
   * gutter
   * @default 0
   */
  gutter?: Gutter;

  /**
   * @description
   * justify
   * @default void 0
   */
  justify?: CSSProperties["justifyItems"];

  /**
   * @description
   * align
   * @default void 0
   */
  align?: CSSProperties["alignItems"];

  /**
   * @description
   * as
   * @default "div"
   */
  as?: "div" | "main";
}

export interface ColProps<T extends "div" | "aside" = "div"> extends ComponentProps {
  /**
   * @description
   * span
   * @default 8
   */
  span?: number;

  /**
   * @description
   * children
   * @default void 0
   */
  children?: ReactNode;

  /**
   * @description
   * as
   * @default "div"
   */
  as?: T;

  /**
   * @description
   * click handler
   * @default void 0
   */
  onClick?: (e: MouseEvent<T extends "div" ? HTMLDivElement : HTMLElement>) => void;
}
