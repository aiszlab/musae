import { ReactNode, ReactPortal } from "react";

/**
 * @description
 *
 * config context value
 */
export interface ContextValue {
  /* message holder */
  messageHolder: ReactPortal;
}

/**
 * @description
 *
 * config props
 */
export interface ConfigProps {
  /* children */
  children?: ReactNode;
}
