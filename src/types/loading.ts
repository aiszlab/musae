import type { ReactNode } from "react";
import type { ComponentProps } from "./element";

type Size = "small" | "medium" | "large";

/**
 * @author murukal
 *
 * @description
 * loading props
 */
export type LoadingProps = ComponentProps & {
  /**
   * @description
   * size
   * @default "medium"
   */
  size?: Size;

  /**
   * @description
   * overlay shown
   * @default true
   */
  overlay?: boolean;

  /**
   * @description
   * children
   * @default void 0
   */
  children?: ReactNode;

  /**
   * @description
   * loading
   * @default true
   */
  loading?: boolean;
};
