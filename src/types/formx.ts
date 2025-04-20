import { ReactNode } from "react";

/**
 * form instance type
 */
export interface UsedForm<T extends object, K extends keyof T = keyof T> {
  /**
   * set field value
   */
  setFieldValue: (name: K, value: T[K]) => void;

  /**
   * set fields value
   */
  setFieldsValue: (values: Partial<T>) => void;
}

/**
 * form props type
 */
export interface FormProps<T extends object, K extends keyof T = keyof T> {
  /**
   * children
   */
  children?: ReactNode;

  /**
   * form instance
   */
  form?: UsedForm<T, K>;
}
