import { ReactNode, ReactPortal } from "react";

/**
 * @description
 *
 * config context value
 */
export interface ContextValue {
  /**
   * @description
   * message holder
   */
  messageHolder: ReactPortal | null;

  /**
   * @description
   * prefix
   */
  prefix: string;
}

/**
 * @description
 *
 * config props
 */
export interface ConfigProps {
  /**
   * @description
   * children
   */
  children?: ReactNode;

  /**
   * @description
   * prefix
   */
  prefix?: string;
}
