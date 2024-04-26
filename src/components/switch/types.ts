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
   */
  value?: boolean;

  /**
   * @description
   * handler after change
   */
  onChange?: (value: boolean) => void | PromiseLike<void>;

  /**
   * @description
   * icon
   */
  icon?: boolean;

  /**
   * @description
   * checked children
   */
  checkedChildren?: ReactNode;

  /**
   * @description
   * unchecked children
   */
  uncheckedChildren?: ReactNode;
}
