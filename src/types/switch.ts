import type { ReactNode, MouseEvent } from "react";
import type { ComponentProps } from "./element";

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
   * @zh 点击事件回调
   * @en Click event handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

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
