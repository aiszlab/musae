import type { MouseEventHandler, ReactNode } from "react";

export type Variant = "filled" | "outlined" | "text" | "elevated" | "tonal";

/**
 * @author murukal
 *
 * @description
 * button render props
 */
export interface ButtonProps {
  /* class name */
  className?: string;

  /* variant */
  variant?: Variant;

  /* click handler */
  onClick?: MouseEventHandler<HTMLButtonElement>;

  /* children */
  children?: ReactNode;
}

/**
 * @description
 * button render props
 */
export type ButtonRenderProps = Required<Pick<ButtonProps, "variant">>;
