import type { ReactNode, JSX, Key } from "react";
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
   */
  value: Key;

  /**
   * @description
   * controller radio is checked
   */
  checked?: boolean;

  /**
   * @description
   * children
   */
  children?: ReactNode;

  /**
   * @description
   * disabled
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
   */
  children: ReactNode;

  /**
   * @description
   * value
   */
  value?: Key;

  /**
   * @description
   * disabled
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

/**
 * @author murukal
 *
 * @description
 * render props
 */
export interface RadioRenderProps {
  /**
   * @description
   * disabled
   */
  disabled: boolean;
}
