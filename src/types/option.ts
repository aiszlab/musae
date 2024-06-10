import type { Key } from "react";

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
  label?: string;

  /**
   * @description
   * children
   * @default void 0
   */
  children?: Option[];
}
