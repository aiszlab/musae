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
  extends Pick<InputHTMLAttributes<HTMLInputElement>, "onFocus" | "onBlur" | "name" | "value"> {
  /* label for input */
  label?: string;

  /* placeholder for input */
  placeholder?: string;

  /* variant for input, display different style */
  variant?: Variant;

  /* prefix node */
  prefix?: ReactNode;

  /* suffix node */
  suffix?: ReactNode;

  /* input type */
  type?: "text" | "password";

  /* value */
  value?: string;

  /* class name */
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
export type InputRef = HTMLInputElement | null;
