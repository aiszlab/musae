import { InputProps } from "./input";

/**
 * @description
 * password input props
 */
export type PasswordInputProps = Omit<InputProps, "type" | "trailing">;
