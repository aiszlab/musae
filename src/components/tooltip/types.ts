import { ReactElement, ReactNode } from "react";
import { ComponentProps } from "../../types/element";

/**
 * @description
 * tooltip props
 */
export type TooltipProps = ComponentProps & {
  /**
   * @description
   * a trigger element.
   */
  children: ReactElement;

  /**
   * @description
   * title
   */
  title?: ReactNode;
};
