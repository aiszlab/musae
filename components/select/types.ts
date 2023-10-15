export type ValueOf = string | number;

export interface Option<T extends ValueOf> {
  /* value */
  value: T;

  /* label */
  label?: string;
}

/**
 * @author murukal
 *
 * @description
 * select props
 */
export interface SelectProps<Value extends ValueOf> {
  /**
   * @description
   * options
   */
  options?: Option<Value>[];

  /**
   * @description
   * complex
   */
  complex?: boolean;

  /**
   * @description
   * value
   */
  value?: Value | Option<Value> | null;
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
