import type { ReactNode } from "react";

/**
 * @description
 * dialog props
 */
export interface DialogProps {
  /**
   * @description
   * children
   */
  children?: ReactNode;

  /**
   * @description
   * is open
   */
  isOpened: boolean;

  /**
   * @description
   * close handler
   */
  onClose?: VoidFunction;
}

/**
 * @description
 * popup
 */
export interface PopupProps extends DialogProps {}
