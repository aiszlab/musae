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

  /**
   * @description
   * title
   */
  title: ReactNode;

  /**
   * @description
   * description
   */
  description?: string;
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

  /**
   * @description
   * value
   */
  value?: number;
};

/**
 * @description
 * step item props
 */
export type StepItemProps = StepItem;
