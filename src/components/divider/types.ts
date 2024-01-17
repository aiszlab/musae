import type { ReactNode } from "react";

export type Align = "center" | "left" | "right";

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
}
