/**
 * @author murukal
 *
 * @description
 * context for form component
 */
export interface ContextValue<T> {
  /**
   * @description
   * form values
   */
  values: T;

  /**
   * @description
   * form change handler
   */
  onChange: () => void;
}

/**
 * @author murukal
 *
 * @description
 * form props
 */
export interface FormProps<T> {
  /**
   * @description
   * default form values
   *
   * render form only once
   */
  defaultValues: T;

  /**
   * @description
   * form change handler
   */
  onChange: (values: T) => void;
}
