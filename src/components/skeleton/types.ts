import { ComponentProps } from "../../types/element";

type Variant = "circular" | "rectangular" | "rounded";

/**
 * @description
 * skeleton props
 */
export type SkeletonProps = ComponentProps & {
  /**
   * @description
   * animation
   */
  animation?: boolean;

  /**
   * @description
   * variant
   */
  variant?: Variant;
};
