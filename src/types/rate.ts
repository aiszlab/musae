import { ComponentProps } from "musae/types/element";

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
   * @default void 0
   */
  value?: number;

  /**
   * @description
   * change handler
   * @default void 0
   */
  onChange?: (value: number) => void;

  /**
   * @description
   * halfable
   * @default true
   */
  halfable?: boolean;

  /**
   * @description
   * disabled
   * @default false
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
