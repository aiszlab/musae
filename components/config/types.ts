import { ReactNode, ReactPortal } from "react";
import { type CLASS_NAMES } from "../../utils/class-name";

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
   * class names
   */
  classNames: typeof CLASS_NAMES;
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
