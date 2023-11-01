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
   * footer
   */
  footer?: ReactNode;

  /**
   * @description
   * on confirm
   */
  onConfirm?: VoidFunction;

  /**
   * @description
   * on cancel
   */
  onCancel?: VoidFunction;
}

/**
 * @description
 * popup
 */
export interface PopupProps extends DialogProps {}
