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

  /* prefix */
  prefix: ReactNode;

  /* suffix */
  suffix: ReactNode;

  /* value */
  value?: string;

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

  /* if input has placeholder */
  hasPlaceholder: boolean;

  /* input ref */
  isNotEmpty: boolean;
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
  wrapper: HTMLDivElement | null;
}

/**
 * @description wrapper props
 */
export interface WrapperProps {
  /* variant for input, display different style */
  variant?: Variant;

  /* if there is label */
  hasLabel: boolean;

  /* if there is value for input */
  isNotEmpty: boolean;

  /* focused */
  isFocused: boolean;
}

/**
 * @description styled input props
 */
export interface StyledInputProps {
  /* if there is prefix */
  hasPrefix: boolean;
}
