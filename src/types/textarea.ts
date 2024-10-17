import type { ComponentProps } from "./element";

/**
 * @description
 * textarea props
 */
export type TextareaProps = ComponentProps & {
  // TODO docs
  /**
   * @description
   * value
   */
  value?: string;

  /**
   * @description
   * invalid
   * @default false
   */
  invalid?: boolean;

  /**
   * @description
   * value change handler
   */
  onChange?: (value: string) => void;
};
