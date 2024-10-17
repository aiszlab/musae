import type { ComponentProps } from "./element";

/**
 * @description
 * otp input props
 */
export type OtpInputProps = ComponentProps & {
  /**
   * @description
   * length
   * @default 6
   */
  length?: number;

  /**
   * @description
   * value change handler
   * @default void 0
   */
  onChange?: (value: string) => void;

  /**
   * @description
   * value
   * @default void 0
   */
  value?: string;

  // TODO docs
  /**
   * @description
   * invalid
   * @default false
   */
  invalid?: boolean;
};
