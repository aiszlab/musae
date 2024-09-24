import type { ReactNode } from "react";
import type { ComponentProps } from "musae/types/element";

type Placement = "top-right" | "top-left" | "bottom-right" | "bottom-left";

/**
 * @description
 * badge props
 */
export type BadgeProps = ComponentProps & {
  /**
   * @description
   * children
   * @requires
   */
  children: ReactNode;

  /**
   * @description
   * content
   * @default void 0
   */
  content?: ReactNode;

  /**
   * @description
   * invisible
   * @default false
   */
  invisible?: boolean;

  /**
   * @description
   * placement
   * @default "top-right"
   */
  placement?: Placement;
};
