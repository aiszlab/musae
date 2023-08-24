import type { MouseEventHandler, ReactNode } from "react";

/**
 * @author murukal
 *
 * @description
 * button render props
 */
export interface ButtonProps {
  /* class name */
  className?: string;

  /* children */
  children?: ReactNode;

  /* click handler */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
