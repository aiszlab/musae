import type { ReactNode } from "react";

type Size = "small" | "large";

/**
 * @description
 * chip props
 */
export interface ChipProps {
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

/**
 * @description
 * chip render props
 */
export interface ChipRenderProps extends Required<Pick<ChipProps, "size">> {}
