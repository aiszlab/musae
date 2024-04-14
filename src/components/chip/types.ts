import type { ReactNode } from "react";
import type { ComponentProps } from "../../types/element";

type Size = "small" | "large";

/**
 * @description
 * chip props
 */
export interface ChipProps extends ComponentProps {
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
}
