import type { ComponentProps } from "./element";
import type { ReactNode } from "react";

/**
 * @description
 * skeleton props
 */
export type SkeletonProps = ComponentProps & {
  /**
   * @description
   * animation
   * @default true
   */
  animation?: boolean;

  /**
   * @description
   * children
   */
  children?: ReactNode;
};
