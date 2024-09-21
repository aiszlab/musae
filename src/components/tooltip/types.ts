import { ReactElement, ReactNode } from "react";
import { ComponentProps } from "musae/types/element";

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
  children: ReactElement;
};
