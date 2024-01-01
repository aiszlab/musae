import { ReactNode } from "react";
import { ComponentProps } from "../../types/element";

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
  value: Set<string>;

  /**
   * @description
   * change handler
   */
  change: (value: string) => void;
}

/**
 * @author murukal
 *
 * @description
 * checkbox group props
 */
export interface CheckboxGroupProps {
  /* children */
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
   */
  checked?: boolean;

  /**
   * @description
   * value
   */
  value: string;

  /**
   * @description
   * children
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
