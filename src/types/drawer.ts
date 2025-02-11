import type { ReactNode } from "react";
import type { Closable } from "../hooks/use-closable";
import type { ComponentProps } from "./element";

export type Placement = "right" | "left" | "top" | "bottom";

/**
 * @description
 * drawer props
 */
export type DrawerProps = Pick<ComponentProps, "className"> & {
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
  closable?: boolean | Closable[];

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

  /**
   * @description
   * on confirm handler
   */
  onConfirm?: VoidFunction;
};

/**
 * @description
 * popup
 */
export type PopupProps = DrawerProps & {
  /* {DrawerProps.size} */
  size: number;

  /* {DrawerProps.closable} */
  closable: boolean | Closable[];

  /* {DrawerProps.placement} */
  placement: Placement;

  /**
   * @description
   * callback will be toggled after close animation end
   */
  onClosed?: () => void;
};
