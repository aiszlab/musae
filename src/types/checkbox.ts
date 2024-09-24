import type { ChangeEvent, Key, ReactNode } from "react";
import type { ComponentProps } from "musae/types/element";

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
  change: (value: Key, isChecked: boolean) => void;

  /**
   * @description
   * is disabled
   */
  isDisabled: boolean;
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

  /**
   * @description
   * change handler
   * @default void 0
   */
  onChange?: (value: Key[]) => void;

  /**
   * @description
   * disabled
   * @default false
   */
  disabled?: boolean;
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
   * @default void 0
   */
  value?: Key;

  /**
   * @description
   * children
   * @default void 0
   */
  children?: ReactNode;

  /**
   * @description
   * change handler
   * @default void 0
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;

  /**
   * @description
   * disabled
   * @default false
   */
  disabled?: boolean;
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
