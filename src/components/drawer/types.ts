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

  /**
   * @description
   * size
   * horizontal drawer, size prop mean width
   * vertical drawer, size prop mean height
   *
   * @default 400
   *
   * // TODO: add prop to docs
   */
  size?: number;
}

/**
 * @description
 * popup
 */
export type PopupProps = DrawerProps & {
  /* {DrawerProps.size} */
  size: number;

  /* {DrawerProps.dismissable} */
  dismissable: boolean | Dismissable[];

  /* {DrawerProps.placement} */
  placement: Placement;

  /**
   * @description
   * callback will be toggled after close animation end
   */
  onClosed?: () => void;
};
