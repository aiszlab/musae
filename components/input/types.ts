import type { DetailedHTMLProps, InputHTMLAttributes, ReactNode, RefObject } from "react";

/**
 * @description Variant
 */
export type Variant = "outlined" | "filled" | "standard";

/**
 * @description component props
 */
export interface Props {
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
  type: "password" | "text";

  /* value */
  value?: string;

  /* class name */
  className?: string;

  /* change handler */
  onChange?: VoidFunction;

  /* focus handler */
  onFocus?: UsedInputProps["onFocus"];

  /* blur handler */
  onBlur?: UsedInputProps["onBlur"];
}

/**
 * @description label props
 */
export interface LabelProps {
  /* focused */
  isFocused: boolean;
}

/**
 * @description used input props
 */
export type UsedInputProps = Pick<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "onFocus" | "onBlur" | "type" | "ref" | "className"
>;

/**
 * @description input ref
 */
export interface InputRef {
  /* input ref */
  input: HTMLInputElement | null;

  /* wrapper ref */
  wrapper: HTMLFieldSetElement | null;
}

/**
 * @description wrapper props
 */
export interface WrapperProps {
  /* focused */
  isFocused: boolean;
}
