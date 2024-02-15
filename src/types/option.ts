import type { Key } from "react";

export interface Option {
  /**
   * @description
   * value
   */
  value: Key;

  /**
   * @description
   * label
   */
  label?: string;

  /**
   * @description
   * children
   */
  children?: Option[];
}
