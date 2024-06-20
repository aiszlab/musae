import { type ReactNode } from "react";

type Size = "small" | "medium" | "large";

/**
 * @author murukal
 *
 * @description
 * loading props
 */
export interface LoadingProps {
  /**
   * @description
   * size
   * @default "medium"
   */
  size?: Size;

  /**
   * @description
   * overlay shown
   * @default true
   */
  overlay?: boolean;

  /**
   * @description
   * children
   * @default void 0
   */
  children?: ReactNode;
}
