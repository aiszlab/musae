import { ReactNode } from "react";
import { ComponentProps } from "../../types/element";

/**
 * @description
 * badge props
 */
export type BadgeProps = ComponentProps & {
  /**
   * @description
   * children
   */
  children: ReactNode;

  /**
   * @description
   * content
   */
  content?: ReactNode;
};
