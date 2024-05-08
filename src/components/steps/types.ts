import type { ReactNode } from "react";

/**
 * @description
 * step item
 */
type StepItem = {
  /**
   * @description
   * leading
   */
  leading?: ReactNode;
};

/**
 * @description
 * steps props
 */
export type StepsProps = {
  /**
   * @description
   * items
   */
  items: StepItem[];
};
