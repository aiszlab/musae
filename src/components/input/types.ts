import type { InputHTMLAttributes, ReactNode } from "react";
import { ComponentProps } from "../../types/element";

/**
 * @description
 * Variant
 */
export type Variant = "outlined" | "filled" | "standard";

/**
 * @description
 * component props
 */
export interface InputProps
  extends Pick<
      InputHTMLAttributes<HTMLInputElement>,
      "onFocus" | "onBlur" | "name" | "value" | "readOnly" | "onClick" | "maxLength" | "onKeyDown"
    >,
    ComponentProps {
  /**
   * @description
   * placeholder for input
   */
  placeholder?: string;

  /**
   * @description
   * variant for input, display different style
   */
  variant?: Variant;

  /**
   * @description
   * leading node
   */
  leading?: ReactNode;

  /**
   * @description
   * trailing node
   */
  trailing?: ReactNode;

  /**
   * @description
   * input type
   *
   * @default "text"
   */
  type?: "text" | "password" | "number";

  /**
   * @description
   * value
   */
  value?: string;

  /**
   * @description
   * invalid
   */
  invalid?: boolean;

  /**
   * @description
   * change handler
   */
  onChange?: (value: string) => void;

  /**
   * @description
   * flexible
   * `true` mean width = `100%`, `false` mean default min width
   */
  flexible?: boolean;
}

/**
 * @description
 * label props
 */
export interface LabelRenderProps {
  /* focused */
  focused: boolean;
}

/**
 * @description
 * input ref
 */
export interface InputRef {
  /**
   * @description
   * focus
   */
  focus?: HTMLInputElement["focus"];

  /**
   * @description
   * select
   */
  select?: HTMLInputElement["select"];
}

/**
 * @description
 * context value
 */
export interface ContextValue {
  /**
   * @description
   * selection
   */
  selection?: ReactNode;
}
