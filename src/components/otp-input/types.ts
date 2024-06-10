/**
 * @description
 * otp input props
 */
export type OtpInputProps = {
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
};
