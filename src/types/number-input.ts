/**
 * @description
 * number input props
 */
export type NumberInputProps = {
  /**
   * @description
   * value
   */
  value?: number;

  /**
   * @description
   * number input change handler
   */
  onChange?: (value: number) => void;

  /**
   * @description
   * formatter
   */
  formatter?: (value?: string) => string;
};
