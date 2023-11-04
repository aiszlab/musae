import type { DOMAttributes, ReactNode } from "react";

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

  /**
   * @description
   * click handler
   */
  onMouseDown?: DOMAttributes<HTMLDivElement>["onMouseDown"];
}

/**
 * @description
 * popup props
 */
export interface PopupProps extends PopperProps {}

/**
 * @author murukal
 *
 * @description
 * wrapper props
 */
export interface PopupRenderProps {
  /**
   * @description
   * if popper is visible
   */
  isVisible: boolean;
}
