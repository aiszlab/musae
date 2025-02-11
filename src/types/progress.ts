import type { RequiredIn } from "@aiszlab/relax/types";
import type { ComponentProps } from "./element";

type Variant = "linear" | "circular";

/**
 * @description
 * `Progress` props
 */
export type ProgressProps = ComponentProps & {
  /**
   * @description
   * variant
   */
  variant?: Variant;

  /**
   * @description
   * value
   */
  value?: number;
};

/**
 * @description
 * `Circular` Props
 */
export type CircularProps = RequiredIn<
  Pick<ProgressProps, "value" | "style" | "className">,
  "value"
>;

/**
 * @description
 * `Linear` Props
 */
export type LinearProps = CircularProps;
