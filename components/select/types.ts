export interface Option<T extends string | number> {
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
export interface SelectProps<Value extends string | number> {
  /**
   * @description
   * options
   */
  options: Option<Value>[];
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
