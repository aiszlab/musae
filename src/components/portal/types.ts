import type { ReactNode } from "react";

/**
 * @description
 * portal props
 */
export interface PortalProps {
  /**
   * @description
   * children
   */
  children?: ReactNode;

  /**
   * @description
   * destroyable
   */
  destroyable?: boolean;

  /**
   * @description
   * open
   */
  open?: boolean;

  /**
   * @description
   * lockable
   */
  lockable?: boolean;
}
