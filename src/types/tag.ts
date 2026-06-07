import type { MouseEvent, ReactNode } from "react";
import type { ComponentProps } from "./element";

type Size = "small" | "medium" | "large";

type Variant = "filled" | "outlined";

/**
 * tag props
 */
export type TagProps = ComponentProps & {
  /**
   * variant
   * @default "filled"
   */
  variant?: Variant;

  /**
   * children
   * @default void 0
   */
  children?: ReactNode;

  /**
   * size
   * @default "medium"
   */
  size?: Size;

  /**
   * if current tag is closable
   * @default false
   */
  closable?: boolean;

  /**
   * click handler
   */
  onClick?: (event: MouseEvent<HTMLSpanElement>) => void;

  /**
   * close handler
   */
  onClose?: (event: MouseEvent<HTMLSpanElement>) => void;

  /**
   * leading node
   * @default void 0
   */
  leading?: ReactNode;
};
