import { ReactNode, ReactPortal } from "react";
import { type CLASS_NAMES } from "../../utils/class-name";

export type ClassNames = typeof CLASS_NAMES;

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
  classNames: ClassNames;
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
