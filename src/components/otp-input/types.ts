/**
 * @description
 * otp input props
 */
export type OtpInputProps = {
  /**
   * @description
   * length
   *
   * @default 6
   */
  length?: number;

  /**
   * @description
   * value change handler
   */
  onChange?: (value: string) => void;

  /**
   * @description
   * value
   */
  value?: string;
};
