import type { CSSProperties, MouseEventHandler, ReactNode } from "react";

export type Variant = "filled" | "outlined" | "text";

export type Color = "primary" | "secondary" | "neutral";

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

  /**
   * @description
   * color: only support preset colors
   */
  color?: Color;

  /* click handler */
  onClick?: MouseEventHandler<HTMLButtonElement>;

  /* children */
  children?: ReactNode;

  /* css style */
  style?: CSSProperties;
}

/**
 * @description
 * button render props
 */
export type ButtonRenderProps = Required<Pick<ButtonProps, "variant" | "color">>;
