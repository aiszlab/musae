import { ReactNode } from "react";
import { ComponentProps } from "../../types/element";
import { type Gutter } from "../../hooks/use-gutters";

/**
 * @description
 * waterfall props
 */
export type WaterfallProps = ComponentProps & {
  /**
   * @description
   * columns
   */
  columns?: number;

  /**
   * @description
   * gutter
   */
  gutter?: Gutter;

  /**
   * @description
   * items
   */
  children?: Exclude<ReactNode, Iterable<ReactNode>>[];

  /**
   * @description
   * sequential
   * use list order rather than add to the shortest column
   */
  sequential?: boolean;
};
