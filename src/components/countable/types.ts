import type { ReactNode } from "react";

/**
 * @description
 * countable props
 */
export type CountableProps = {
  /**
   * @description
   * count total after every trigger
   */
  count: number;

  /**
   * @description
   * children
   */
  children?: ReactNode;
};
