import type { ReactNode } from "react";
import type { Gutter } from "../../hooks/use-gutters";
import type { ComponentProps } from "../../types/element";

type Orientation = "horizontal" | "vertical";

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

  // TODO: update docs
  /**
   * @description
   * orientation
   * @default "horizontal"
   */
  orientation?: Orientation;
};
