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
 * group render props
 */
export interface GroupRenderProps {
  /* children */
  children: ReactNode;
}

/**
 * @author murukal
 *
 * @description
 * checkbox render props
 */
export interface CheckboxRenderProps {
  /* if is checked */
  isChecked?: boolean;

  /* value */
  value?: string;
}
