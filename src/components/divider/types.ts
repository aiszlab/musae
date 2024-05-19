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
