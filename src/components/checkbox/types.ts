import type { ChangeEvent, Key, ReactNode } from "react";
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
  change: (value: Key, isChecked: boolean) => void;
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

  // TODO add to docs
  /**
   * @description
   * change handler
   */
  onChange?: (value: Key[]) => void;
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
