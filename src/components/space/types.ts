import type { ReactNode } from "react";
import { Gutter } from "../../hooks/use-gutters";

/**
 * @description
 * space props
 */
export type SpaceProps = {
  /**
   * @description
   * children
   */
  children?: ReactNode;

  /**
   * @description
   * gutter
   */
  gutter?: Gutter;
};
