import { ReactNode } from "react";

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
}
