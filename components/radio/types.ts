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
 * group render props
 */
export interface GroupRenderProps {
  /* children */
  children: ReactNode;

  /* value */
  value?: string;
}

/**
 * @author murukal
 *
 * @description
 * radio render props
 */
export interface RadioRenderProps {
  /* value */
  value: string;
}
