import type { ReactNode } from "react";
import type { ComponentProps } from "musae/types/element";

type Size = "small" | "medium" | "large";

/**
 * @description
 * tag props
 */
export type TagProps = ComponentProps & {
  /**
   * @description
   * children
   * @default void 0
   */
  children?: ReactNode;

  /**
   * @description
   * size
   * @default "medium"
   */
  size?: Size;

  /**
   * @description
   * if current tag is closable
   * @default false
   */
  closable?: boolean;

  /**
   * @description
   * close handler
   */
  onClose?: () => void;

  /**
   * @description
   * leading node
   * @default void 0
   */
  leading?: ReactNode;
};
