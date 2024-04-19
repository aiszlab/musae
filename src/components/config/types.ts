import type { ReactNode, RefObject } from "react";
import { type CLASS_NAMES } from "../../utils/class-name";
import type { MessageRef } from "../message";

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
   * in musae, we can declare global messager
   * so users will not need to declare anymore
   */
  messager: RefObject<MessageRef> | null;

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
