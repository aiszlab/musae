import type { ReactNode } from "react";
import type { ComponentProps } from "./element";
import type { PopoverProps } from "./popover";

/**
 * @description
 * tooltip props
 */
export type TooltipProps = ComponentProps & {
  /**
   * @description
   * title
   * @default void 0
   */
  title?: ReactNode;

  /**
   * @description
   * a trigger element.
   * @requires
   */
  children: PopoverProps["children"];
};
