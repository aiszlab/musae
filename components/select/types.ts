import type { Key } from "react";

export interface Option {
  /* value */
  value: Key;

  /* label */
  label?: string;
}

export type Mode = "multiple";

export type Value = Key | Option;

export type ValueOrValues = Value[] | Value;

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
  value?: ValueOrValues;

  /**
   * @description
   * mode
   */
  mode?: Mode;
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
