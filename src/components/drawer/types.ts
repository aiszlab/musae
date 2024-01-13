import { ReactNode } from "react";

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
  isOpened: boolean;

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
}

/**
 * @description
 * popup
 */
export interface PopupProps extends DrawerProps {}

/**
 * @description
 * panel
 */
export interface PopupRenderProps extends Required<Pick<DrawerProps, "placement">> {}
