import type { ReactNode } from "react";
import type { ComponentProps } from "./element";
import type { Gutter } from "../hooks/use-gutters";

/**
 * @description
 * waterfall props
 */
export type WaterfallProps = ComponentProps & {
  /**
   * @description
   * columns
   * @default 4
   */
  columns?: number;

  /**
   * @description
   * gutter
   * @default 8
   */
  gutter?: Gutter;

  /**
   * @description
   * items
   * @default void 0
   */
  children?: Exclude<ReactNode, Iterable<ReactNode>>[];

  /**
   * @description
   * sequential
   * use list order rather than add to the shortest column
   * @default false
   */
  sequential?: boolean;
};
