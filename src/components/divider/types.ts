import type { ReactNode } from "react";
import { ComponentProps } from "../../types/element";

export type Align = "center" | "left" | "right";

export type Type = "horizontal" | "vertical";

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
   * type
   * @default "horizontal"
   */
  type?: Type;
}
