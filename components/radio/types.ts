import type { ReactNode, JSX } from "react";
import type { Partialable } from "@aiszlab/relax";

export type Value = Partialable<string | number>;

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

  /* disabled */
  isDisabled: boolean;
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
  checked?: boolean;

  /* children */
  children?: ReactNode;

  /* disabled */
  disabled?: boolean;
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

  /* disabled */
  disabled?: boolean;
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

/**
 * @author murukal
 *
 * @description
 * render props
 */
export interface RadioRenderProps {
  /* disabled */
  disabled: boolean;
}
