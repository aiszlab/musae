import type { AriaAttributes, DOMAttributes, DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

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
  extends Pick<InputHTMLAttributes<HTMLInputElement>, "onFocus" | "onBlur" | "name" | "value" | "readOnly"> {
  /**
   * @description
   * label for input
   */
  label?: string;

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
   * prefix node
   */
  prefix?: ReactNode;

  /**
   * @description
   * suffix node
   */
  suffix?: ReactNode;

  /**
   * @description
   * input type
   */
  type?: "text" | "password";

  /**
   * @description
   * value
   */
  value?: string;

  /**
   * @description
   * class name
   */
  className?: string;

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
 * wrapper props
 */
export interface WrapperRenderProps {
  /* focused */
  focused: boolean;

  /**
   * @description
   * invalid
   */
  invalid: boolean;
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
   * getBoundingClientRect
   */
  getBoundingClientRect: HTMLFieldSetElement["getBoundingClientRect"];
}
