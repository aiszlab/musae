import type { ReactNode, RefObject } from "react";
import type { HolderRef } from "./notification";
import type { Locale } from "./locale";
import type { Nullable } from "@aiszlab/relax/types";

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
  notifier?: RefObject<Nullable<HolderRef>> | null;

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

  /**
   * @description
   * locale
   */
  locale?: Locale;
}
