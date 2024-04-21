import type { ReactNode } from "react";
import type { ComponentProps } from "../../types/element";

type Size = "small" | "medium" | "large";

/**
 * @description
 * tag props
 */
export type TagProps = ComponentProps & {
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
   * if current tag is closable
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
   */
  leading?: ReactNode;
};
