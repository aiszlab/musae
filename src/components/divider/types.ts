import type { ReactNode } from "react";
import type { ComponentProps } from "musae/types/element";
import type { Gutter } from "../../hooks/use-gutters";

export type Align = "center" | "left" | "right";

export type Orientation = "horizontal" | "vertical";

/**
 * @description
 * divider props
 */
export interface DividerProps extends ComponentProps {
  /**
   * @description
   * children
   * @default void 0
   */
  children?: ReactNode;

  /**
   * @description
   * align
   * @default "center"
   */
  align?: Align;

  /**
   * @description
   * orientation
   * @default "horizontal"
   */
  orientation?: Orientation;

  /**
   * @description
   * margin
   */
  margin?: Gutter;
}
