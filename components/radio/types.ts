import type { ReactNode, JSX } from "react";

/**
 * @author murukal
 *
 * @description
 * context value
 */
export interface ContextValue {
  value?: string;
  onChange: (value: string) => void;
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
  value?: string;
}

/**
 * @author murukal
 *
 * @description
 * radio props
 */
export interface RadioProps {
  /* value for current radio */
  value: string;

  /* controller radio is checked */
  isChecked?: boolean;
}

/**
 * @author murukal
 *
 * @description
 * typed Radio, with group property
 */
export interface TypedRadio {
  (props: RadioProps): JSX.Element;
  Group: (props: RadioGroupProps) => JSX.Element;
}
