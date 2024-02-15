import type { ReactNode } from "react";
import type { Dismissable } from "../../hooks/use-dismissable";

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
   * open
   */
  open: boolean;

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
   * on close
   */
  onClose?: VoidFunction;

  /**
   * @description
   * Whether the modal can be closed by clicking on the mask or pressing the Esc key.
   */
  dismissable?: boolean | Dismissable[];

  /**
   * @description
   * title
   */
  title?: ReactNode;
}

/**
 * @description
 * popup
 */
export type PopupProps = DialogProps;
