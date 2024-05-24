import type { ReactNode, RefObject } from "react";
import type { CLASS_NAMES } from "../../utils/class-name";
import type { NotifierRef } from "../notification/types";

export type ClassNames = typeof CLASS_NAMES;

/**
 * @description
 *
 * config context value
 */
export interface ContextValue {
  /**
   * @description
   * messager
   * in musae, we can declare global notifier
   * so users will not need to declare anymore
   */
  notifier?: RefObject<NotifierRef> | null;

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
