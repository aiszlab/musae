import type { Key, ReactNode } from "react";
import type { ComponentProps } from "../../types/element";

/**
 * @author murukal
 *
 * @description
 * context value
 */
export interface ContextValue {
  /**
   * @description
   * checked values
   */
  value: Set<Key>;

  /**
   * @description
   * change handler
   */
  change: (value: Key) => void;
}

/**
 * @author murukal
 *
 * @description
 * checkbox group props
 */
export interface CheckboxGroupProps {
  /**
   * @description
   * checked values
   * @example
   * ["A"]
   * @default void 0
   */
  value?: Key[];

  /**
   * @description
   * children
   * @example
   * <Checkbox value="A" />
   * @requires
   */
  children: ReactNode;
}

/**
 * @author murukal
 *
 * @description
 * checkbox props
 */
export interface CheckboxProps extends ComponentProps {
  /**
   * @description
   * if is checked
   * @default void 0
   */
  checked?: boolean;

  /**
   * @description
   * value
   * @requires
   */
  value: Key;

  /**
   * @description
   * children
   * @default void 0
   */
  children?: ReactNode;
}

/**
 * @author murukal
 *
 * @description
 * typed Checkbox, with group property
 */
export interface TypedCheckbox {
  (props: CheckboxProps): JSX.Element;
  Group: (props: CheckboxGroupProps) => JSX.Element;
}
