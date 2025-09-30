import type { Key, ReactNode } from "react";

export interface Option {
  /**
   * @description
   * value
   * @requires
   */
  value: Key;

  /**
   * @description
   * label
   * @default void 0
   */
  label?: ReactNode;

  /**
   * @description
   * children
   * @default void 0
   */
  children?: Option[];
}
