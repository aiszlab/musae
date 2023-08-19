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
export interface Props<Value extends string | number> {
  /* options */
  options: Option<Value>[];
}