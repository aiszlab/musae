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
   * halfable
   */
  halfable?: boolean;

  /**
   * @description
   * disabled
   */
  disabled?: boolean;
};

/**
 * @description
 * star types
 */
export type StarProps = {
  /**
   * @description
   * disabled
   */
  disabled: boolean;

  /**
   * @description
   * value
   */
  value: number;

  /**
   * @description
   * at
   */
  at: number;

  /**
   * @description
   * hover handler
   */
  onEnter: (at: number) => void;

  /**
   * @description
   * leave handler
   */
  onLeave: () => void;

  /**
   * @description
   * click handler
   */
  onClick: (value: number) => void;
};
