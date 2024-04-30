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
   * Whether the drawer can be closed by clicking on the overlay or pressing the Esc key.
   */
  dismissable?: boolean | Dismissable[];
}

/**
 * @description
 * popup
 */
export type PopupProps = DrawerProps & {
  /**
   * @description
   * callback will be toggled after close animation end
   */
  onClosed?: () => void;
};
