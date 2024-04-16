import type { ReactNode } from "react";
import type { ComponentProps } from "../../types/element";

type Size = "small" | "large";

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
};
