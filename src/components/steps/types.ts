import type { ReactNode } from "react";

export type Status = "done" | "doing" | "todo";

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
export type StepItemProps = StepItem & {
  /**
   * @description
   * status
   */
  status: Status;
};
