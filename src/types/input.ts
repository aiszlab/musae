import type { InputHTMLAttributes, ReactNode } from "react";
import type { ComponentProps } from "./element";

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
      "onFocus" | "onBlur" | "name" | "value" | "disabled" | "onClick" | "maxLength" | "onKeyDown"
    >,
    ComponentProps {
  /**
   * @description
   * value
   * @default void 0
   */
  value?: string;

  /**
   * @description
   * placeholder for input
   * @default void 0
   */
  placeholder?: string;

  /**
   * @description
   * variant for input, display different style
   * @default "outlined"
   */
  variant?: Variant;

  /**
   * @description
   * leading node
   * @default void 0
   */
  leading?: ReactNode;

  /**
   * @description
   * trailing node
   * @default void 0
   */
  trailing?: ReactNode;

  /**
   * @description
   * input type
   * @default "text"
   */
  type?: "text" | "password" | "number";

  /**
   * @description
   * invalid
   * @default false
   */
  invalid?: boolean;

  /**
   * @description
   * change handler
   * @default void 0
   */
  onChange?: (value: string) => void;
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
