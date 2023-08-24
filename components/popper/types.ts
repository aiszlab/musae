import type { ReactNode } from "react";

/**
 * @author murukal
 *
 * @description
 * popper props
 */
export interface PopperProps {
  /* children */
  children: ReactNode;

  /* if popper is visible */
  isVisible: boolean;

  /* trigger */
  trigger?: Element | null;
}

/**
 * @author murukal
 *
 * @description
 * wrapper props
 */
export interface WrapperProps {
  /* if popper is visible */
  isVisible: boolean;
}
