import { ComponentProps } from "./element";

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
   * value change handler
   */
  onChange?: (value: string) => void;
};
