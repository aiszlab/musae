import type { ReactNode } from "react";
import type { Dismissable } from "../../hooks/use-dismissable";

export type Placement = "right" | "left" | "top" | "bottom";

/**
 * @description
 * drawer props
 */
export interface DrawerProps {
  /**
   * @description
   * children
   */
  children?: ReactNode;

  /**
   * @description
   * is open
   */
  open: boolean;

  /**
   * @description
   * close handler
   */
  onClose?: VoidFunction;

  /**
   * @description
   * title
   */
  title?: ReactNode;

  /**
   * @description
   * placement
   */
  placement?: Placement;

  /**
   * @description
   * Whether the modal can be closed by clicking on the mask or pressing the Esc key.
   */
  dismissable?: boolean | Dismissable[];
}

/**
 * @description
 * popup
 */
export interface PopupProps extends DrawerProps {}
