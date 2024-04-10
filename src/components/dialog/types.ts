import type { CSSProperties, ReactNode } from "react";
import type { Dismissable } from "../../hooks/use-dismissable";
import type { StyleXStyles } from "@stylexjs/stylex";

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

  /**
   * @description
   * styles, in image preview, we need panel bg color to be transparent
   * in musae, styles we support two ways
   * 1. react css properties
   * 2. stylex css styles
   */
  styles?: {
    panel?: CSSProperties | StyleXStyles;
  };
}

/**
 * @description
 * popup
 */
export type PopupProps = DialogProps;
