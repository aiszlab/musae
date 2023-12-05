import type { MouseEventHandler, ReactNode } from "react";
import { ComponentProps } from "../../types/element";

export type Variant = "filled" | "outlined" | "text";

export type Color = "primary" | "secondary" | "neutral";

type Size = "small" | "medium";

/**
 * @author murukal
 *
 * @description
 * button render props
 */
export interface ButtonProps extends Partial<Pick<HTMLButtonElement, "type">>, ComponentProps {
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

  /**
   * @description
   * click handler
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;

  /**
   * @description
   * children
   */
  children?: ReactNode;

  /**
   * @description
   * size
   */
  size?: Size;

  /**
   * @description
   * disabled
   */
  disabled?: boolean;
}

/**
 * @description
 * button render props
 */
export type ButtonRenderProps = Required<Pick<ButtonProps, "variant" | "color" | "size">>;
