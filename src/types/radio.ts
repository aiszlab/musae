import type { ReactNode, JSX, Key } from "react";
import type { ComponentProps } from "./element";

/**
 * @author murukal
 *
 * @description
 * context value
 */
export interface ContextValue {
  /**
   * @description
   * checked value in context
   */
  value?: Key;

  /**
   * @description
   * change handler
   */
  change: (value: Key) => void;

  /**
   * @description
   * disabled in context
   */
  isDisabled: boolean;
}

/**
 * @author murukal
 *
 * @description
 * radio props
 */
export interface RadioProps extends ComponentProps {
  /**
   * @description
   * value for current radio
   * @requires
   */
  value: Key;

  /**
   * @description
   * controller radio is checked
   * @default void 0
   */
  checked?: boolean;

  /**
   * @description
   * children
   * @default void 0
   */
  children?: ReactNode;

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
 * radio group props
 */
export interface RadioGroupProps {
  /**
   * @description
   * children
   * @requires
   */
  children: ReactNode;

  /**
   * @description
   * value
   * @default void 0
   */
  value?: Key;

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
 * typed Radio, with group property
 */
export interface TypedRadio {
  /**
   * @description
   * component self
   */
  (props: RadioProps): JSX.Element;

  /**
   * @description
   * group
   */
  Group: (props: RadioGroupProps) => JSX.Element;
}
