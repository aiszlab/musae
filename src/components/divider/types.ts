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

/**
 * @description
 * divider render props
 */
export interface DividerRenderProps {
  /**
   * @description
   * if there is child
   */
  hasChildren: boolean;

  /**
   * @description
   * offset
   */
  offset: number;
}
