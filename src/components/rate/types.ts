import { ComponentProps } from "../../types/element";

/**
 * @description
 * rate props
 */
export type RateProps = ComponentProps & {
  /**
   * @description
   * rate count
   * @default 5
   */
  count?: number;

  /**
   * @description
   * rate value
   */
  value?: number;

  /**
   * @description
   * change handler
   */
  onChange?: (value: number) => void;

  /**
   * @description
   * partialable
   */
  partialable?: boolean;

  /**
   * @description
   * disabled
   */
  disabled?: boolean;
};
