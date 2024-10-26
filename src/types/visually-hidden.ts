import type { DOMAttributes, ReactNode } from "react";

/**
 * @description
 * visually hidden props
 */
export type VisuallyHiddenProps = DOMAttributes<HTMLDivElement> & {
  /**
   * @description
   * children
   */
  children?: ReactNode;
};
