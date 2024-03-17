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
   * children
   */
  children?: ReactNode;

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
};
