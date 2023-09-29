import type { ReactNode, JSX } from "react";

export type Value = string | number | undefined;

/**
 * @author murukal
 *
 * @description
 * context value
 */
export interface ContextValue {
  /* context value */
  value: Value;

  /* change handler */
  onChange: (value: Value) => void;
}

/**
 * @author murukal
 *
 * @description
 * radio group props
 */
export interface RadioGroupProps {
  /* children */
  children: ReactNode;

  /* value */
  value?: Value;
}

/**
 * @author murukal
 *
 * @description
 * radio props
 */
export interface RadioProps {
  /* value for current radio */
  value?: Value;

  /* controller radio is checked */
  isChecked?: boolean;

  /* children */
  children?: ReactNode;
}

/**
 * @author murukal
 *
 * @description
 * typed Radio, with group property
 */
export interface TypedRadio {
  /* component self */
  (props: RadioProps): JSX.Element;

  /* group */
  Group: (props: RadioGroupProps) => JSX.Element;
}
