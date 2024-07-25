import { ComponentProps } from "../../types/element";

type Variant = "button" | "avatar" | "title";

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
