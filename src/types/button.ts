import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import type { ComponentProps } from "./element";

export type Variant = "filled" | "outlined" | "text";

export type Color = "primary" | "secondary" | "tertiary" | "error";

export type Size = "xsmall" | "small" | "medium" | "large" | "xlarge";

type Shape = "round" | "square";

/**
 * @author murukal
 *
 * @description
 * button render props
 */
export interface ButtonProps
  extends Partial<
      Pick<
        ButtonHTMLAttributes<HTMLButtonElement>,
        "type" | "onPointerEnter" | "onPointerLeave" | "onContextMenu"
      >
    >,
    ComponentProps {
  /**
   * @description
   * variant
   * @default "filled"
   */
  variant?: Variant;

  /**
   * @description
   * color: only support preset colors
   * @default "primary"
   */
  color?: Color;

  /**
   * @description
   * shape
   * @default "rounded"
   */
  shape?: Shape;

  /**
   * @description
   * size
   * @default "medium"
   */
  size?: Size;

  /**
   * @description
   * children
   * @default void 0
   */
  children?: ReactNode;

  /**
   * @description
   * disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * @description
   * prefix react node
   * @template
   * icon or prefix signal
   * @default void 0
   */
  prefix?: ReactNode;

  /**
   * @description
   * suffix react node
   * @template
   * icon or suffix signal
   * @default void 0
   */
  suffix?: ReactNode;

  /**
   * @description
   * if false, without a ripple
   * @default true
   */
  ripple?: boolean;

  /**
   * @description
   * click handler
   * @default void 0
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;

  /**
   * loading
   * @description 按钮正在等到，当前状态不可用
   * @default false
   */
  loading?: boolean;
}
