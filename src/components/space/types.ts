import type { ReactNode } from "react";
import { Gutter } from "../../hooks/use-gutters";
import { ComponentProps } from "../../types/element";

/**
 * @description
 * space props
 */
export type SpaceProps = ComponentProps & {
  /**
   * @description
   * children
   */
  children?: ReactNode;

  /**
   * @description
   * gutter
   */
  gutter?: Gutter;
};
