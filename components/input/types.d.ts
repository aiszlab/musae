import type { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

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
}

/**
 * @description label props
 */
export interface LabelProps {
  /* focused */
  isFocused: boolean;

  /* if input has placeholder */
  hasPlaceholder: boolean;
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
  /* focus */
  focus?: HTMLInputElement["focus"];
}
