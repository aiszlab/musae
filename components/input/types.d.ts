import type { ReactNode } from "react";

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
}

/**
 * @description used input props
 */
export type UsedInputProps = Pick<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "onFocus" | "onBlur" | "type" | "ref" | "className"
>;
