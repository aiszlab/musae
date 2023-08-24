import type { ReactNode } from "react";

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
  /* value */
  value: string;
}
