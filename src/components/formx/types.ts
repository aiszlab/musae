import { Partialable } from "@aiszlab/relax/types";
import { ReactNode } from "react";

export type FieldsValue = Record<PropertyKey, unknown>;

/**
 * form item props
 */
export interface FormItemProps<FieldValue> {
  /**
   * name
   */
  name: PropertyKey;

  /**
   * rules
   */
  rules?: {
    validate: (value: Partialable<FieldValue>) => ReactNode | Promise<ReactNode>;
  }[];
}
