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
   * if popper is open
   */
  open: boolean;

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
 * popper ref
 */
export interface PopperRef {
  /**
   * @description
   * update
   */
  update?: VoidFunction;
}
