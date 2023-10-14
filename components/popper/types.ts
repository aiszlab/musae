import type { ReactNode } from "react";

/**
 * @author murukal
 *
 * @description
 * popper props
 */
export interface PopperProps {
  /**
   * @description
   * children
   */
  children: ReactNode;

  /**
   * @description
   * if popper is visible
   */
  isVisible: boolean;

  /**
   * @description
   * trigger
   */
  trigger?: {
    getBoundingClientRect: () => DOMRect;
  } | null;

  /**
   * @description
   * class name
   */
  className?: string;
}

/**
 * @author murukal
 *
 * @description
 * wrapper props
 */
export interface PopperRenderProps {
  /**
   * @description
   * if popper is visible
   */
  isVisible: boolean;
}
