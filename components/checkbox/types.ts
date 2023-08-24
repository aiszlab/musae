import { ReactNode } from "react";

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
export interface CheckboxProps {
  /* if is checked */
  isChecked?: boolean;

  /* value */
  value?: string;
}
