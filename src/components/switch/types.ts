import type { ReactNode } from "react";
import type { ComponentProps } from "../../types/element";

/**
 * @author murukal
 *
 * @description
 * switch props
 */
export interface SwitchProps extends ComponentProps {
  /**
   * @description
   * value
   * @default void 0
   */
  value?: boolean;

  /**
   * @description
   * handler after change
   * @default void 0
   */
  onChange?: (value: boolean) => void | PromiseLike<void>;

  /**
   * @description
   * icon
   * @default false
   */
  icon?: boolean;

  /**
   * @description
   * checked children
   * @default void 0
   */
  checkedChildren?: ReactNode;

  /**
   * @description
   * unchecked children
   * @default void 0
   */
  uncheckedChildren?: ReactNode;

  /**
   * @description
   * disabled
   * @default false
   */
  disabled?: boolean;
}
