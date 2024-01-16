import type { ReactNode } from "react";
import { ComponentProps } from "../../types/element";

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

/**
 * @description
 * chip render props
 */
export interface ChipRenderProps extends Required<Pick<ChipProps, "size">> {}
