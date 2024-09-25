import type { CSSProperties } from "react";

/**
 * @author
 * @description
 * component always has foundation props
 * like class name, style
 */
export interface ComponentProps {
  /**
   * @description
   * class name
   */
  className?: string;

  /**
   * @description
   * style for current component
   */
  style?: CSSProperties;
}
