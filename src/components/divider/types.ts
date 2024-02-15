import type { ReactNode } from "react";

export type Align = "center" | "left" | "right";

export type Type = "horizontal" | "vertical";

/**
 * @description
 * divider props
 */
export interface DividerProps {
  /**
   * @description
   * children
   */
  children?: ReactNode;

  /**
   * @description
   * align
   */
  align?: Align;

  /**
   * @description
   * type
   */
  type?: Type;
}
