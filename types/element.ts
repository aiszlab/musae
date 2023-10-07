import type { FocusEventHandler, FormEventHandler, RefCallback } from "react";

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
