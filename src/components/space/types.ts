import type { ReactNode } from "react";
import type { Gutter } from "../../hooks/use-gutters";
import type { ComponentProps } from "../../types/element";

type Type = "horizontal" | "vertical";

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

  /**
   * @description
   * direction
   * @default "horizontal"
   */
  type?: Type;
};
