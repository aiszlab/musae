import type { CSSProperties, MouseEventHandler, ReactNode } from "react";

export type Variant = "filled" | "outlined" | "text";

export type Color = "primary" | "secondary" | "neutral";

/**
 * @author murukal
 *
 * @description
 * button render props
 */
export interface ButtonProps extends Pick<HTMLButtonElement, "type"> {
  /* class name */
  className?: string;

  /**
   * @description
   * variant
   * @example filled
   */
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
