import type { CSSProperties, ReactNode } from "react";
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
   * Whether the dialog can be closed by clicking on the overlay or pressing the Esc key.
   */
  dismissable?: boolean | Dismissable[];

  /**
   * @description
   * title
   */
  title?: ReactNode;

  /**
   * @description
   * styles
   * different module style
   */
  styles?: {
    panel?: CSSProperties;
    body?: CSSProperties;
  };

  /**
   * @description
   * close `Dialog` handler
   *
   * @template
   * in `Dialog`, close icon & cancel button will render default
   * if user click these nodes, this callback will be toggled
   */
  onClose?: VoidFunction;
}

/**
 * @description
 * popup
 */
export type PopupProps = DialogProps & {
  /**
   * @description
   * callback will be toggled after close animation end
   */
  onClosed?: () => void;
};
