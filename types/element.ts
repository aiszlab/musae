import type { FocusEventHandler, FormEventHandler, RefCallback } from "react";

/**
 * @author murukal
 * @description
 * form item need pass some props
 * use this props as common
 */
export interface RegistedElementProps<T = unknown> {
  /**
   * @description
   * name
   */
  name: string;

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
  onChange: FormEventHandler<T>;

  /**
   * @description
   * blur handler
   */
  onBlur: FocusEventHandler<T>;
}
