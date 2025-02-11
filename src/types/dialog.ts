import type { CSSProperties, ReactNode } from "react";
import type { Closable } from "../hooks/use-closable";
import type { RequiredIn } from "@aiszlab/relax/types";
import type { PortalProps } from "./portal";
import type { ComponentProps } from "./element";

/**
 * @description
 * dialog props
 */
export type DialogProps = Pick<ComponentProps, "className"> & {
  /**
   * @description
   * children
   * @default void 0
   */
  children?: ReactNode;

  /**
   * @description
   * open
   * @requires
   */
  open: boolean;

  /**
   * @description
   * footer
   * @default void 0
   */
  footer?: ReactNode;

  /**
   * @description
   * Whether the dialog can be closed by clicking on the overlay or pressing the Esc key.
   * @default true
   */
  closable?: boolean | Closable[];

  /**
   * @description
   * title
   * @default void 0
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
   * on confirm
   * @default void 0
   */
  onConfirm?: VoidFunction;

  /**
   * @description
   * close `Dialog` handler
   *
   * @template
   * in `Dialog`, close icon & cancel button will render default
   * if user click these nodes, this callback will be toggled
   *
   * @default void 0
   */
  onClose?: VoidFunction;

  /**
   * @link {PortalProps.container}
   */
  container?: PortalProps["container"];
};

/**
 * @description
 * popup
 */
export type PopupProps = RequiredIn<DialogProps, "closable"> & {
  /**
   * @description
   * callback will be toggled after close animation end
   */
  onClosed?: () => void;
};
