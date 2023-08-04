import { ReactNode } from "react";

/**
 * @description theme declaration
 */
interface Theme {
  colors?: {
    primary?: string;
  };
}

/**
 * @description theme provider
 */
export interface Props {
  /* children */
  children: ReactNode;

  /* theme */
  theme: Theme;
}
