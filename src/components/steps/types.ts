import type { ReactNode } from "react";
import type { ComponentProps } from "../../types/element";

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
   * @default void 0
   */
  leading?: ReactNode;

  /**
   * @description
   * title
   * @requires
   */
  title: ReactNode;

  /**
   * @description
   * description
   * @default void 0
   */
  description?: ReactNode;
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

  // TODO add to docs
  /**
   * @description
   * size
   */
  size?: number;
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

  /**
   * @description
   * leading size
   */
  size?: number;
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

  /**
   * @description
   * size
   */
  size?: number;
};
