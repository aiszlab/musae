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
   * @default void 0
   */
  children?: ReactNode;

  /**
   * @description
   * gutter
   * @default 4
   */
  gutter?: Gutter;
};
