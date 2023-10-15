import type { Key } from "react";

export interface Option {
  /* value */
  value: Key;

  /* label */
  label?: string;
}

/**
 * @author murukal
 *
 * @description
 * select props
 */
export interface SelectProps {
  /**
   * @description
   * options
   */
  options?: Option[];

  /**
   * @description
   * complex
   */
  complex?: boolean;

  /**
   * @description
   * value
   */
  value?: Key | Option | null;
}

/**
 * @description
 * dropdown wrapper render props
 */
export interface DropdownWrapperRenderProps {
  /**
   * @description
   * width
   */
  width?: number;
}
