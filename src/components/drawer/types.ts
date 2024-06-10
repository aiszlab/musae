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
   * @default void 0
   */
  children?: ReactNode;

  /**
   * @description
   * is open
   * @requires
   */
  open: boolean;

  /**
   * @description
   * title
   * @default void 0
   */
  title?: ReactNode;

  /**
   * @description
   * placement
   * @default "right"
   */
  placement?: Placement;

  /**
   * @description
   * Whether the drawer can be closed by clicking on the overlay or pressing the Esc key.
   * @default true
   */
  dismissable?: boolean | Dismissable[];

  /**
   * @description
   * size
   * horizontal drawer, size prop mean width
   * vertical drawer, size prop mean height
   *
   * @default 400
   */
  size?: number;

  /**
   * @description
   * close handler
   * @default void 0
   */
  onClose?: VoidFunction;
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
