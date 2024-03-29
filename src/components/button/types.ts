import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import type { ComponentProps, StylexProps } from "../../types/element";

export type Variant = "filled" | "outlined" | "text";

export type Color = "primary" | "secondary" | "tertiary";

type Size = "small" | "medium" | "large";

type Shape = "rounded" | "circular";

/**
 * @author murukal
 *
 * @description
 * button render props
 */
export interface ButtonProps
  extends Partial<Pick<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onPointerEnter" | "onPointerLeave">>,
    ComponentProps,
    StylexProps {
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
   * shape
   */
  shape?: Shape;

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

  /**
   * @description
   * prefix react node
   * @template
   * icon or prefix signal
   */
  prefix?: ReactNode;

  /**
   * @description
   * suffix react node
   * @template
   * icon or suffix signal
   */
  suffix?: ReactNode;

  /**
   * @description
   * if false, without a ripple
   */
  ripple?: boolean;
}
