import type { StyleXStyles } from "@stylexjs/stylex";
import type { CSSProperties, RefCallback } from "react";

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
   * style
   */
  style?: CSSProperties;
}

/**
 * @author murukal
 * @description
 * field need pass some props
 * use this props as common
 */
export interface FieldRenderProps<T = unknown> {
  /**
   * @description
   * name
   */
  name: string;

  /**
   * @description
   * value
   */
  value: unknown;

  /**
   * @description
   * invalid
   */
  invalid?: boolean;

  /**
   * @description
   * ref
   */
  ref?: RefCallback<T>;

  /**
   * @description
   * change handler
   */
  onChange: (...args: unknown[]) => void;

  /**
   * @description
   * blur handler
   */
  onBlur: (...args: unknown[]) => void;
}

/**
 * @description
 * with level
 */
export type WithLevel<T extends Object> = T & {
  /**
   * @description
   * level
   */
  level: number;
};

/**
 * @description
 * stylex component props
 */
export type StylexProps = {
  /**
   * @description
   * styles
   */
  styles?: StyleXStyles;
};

/**
 * @description
 * size
 * in musae, we always use three size
 */
export type Size = "small" | "medium" | "large";
