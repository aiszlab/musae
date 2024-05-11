import type { ReactNode } from "react";
import { ComponentProps } from "../../types/element";

export type Status = "done" | "doing" | "todo";

export type Type = "horizontal" | "vertical";

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
export type StepsProps = ComponentProps & {
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

  /**
   * @description
   * step change handler
   */
  onChange?: (value: number) => void;

  /**
   * @description
   * steps type
   * `horizontal` or `vertical`
   *
   * @default horizontal
   */
  type?: Type;
};

/**
 * @description
 * step item props
 */
export type StepItemProps = StepItem & {
  /**
   * @description
   * current item value
   */
  value: number;
};

/**
 * @description
 * steps context value
 */
export type ContextValue = {
  /**
   * @description
   * click handler
   */
  onChange?: (value: number) => void;

  /**
   * @description
   * steps type: depends on steps prop
   */
  type: Type;

  /**
   * @description
   * max
   */
  max: number;

  /**
   * @description
   * value
   */
  value: number;
};
