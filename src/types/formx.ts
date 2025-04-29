import type { ReactNode, RefObject } from "react";
import type { Subject } from "rxjs";

export type ChangingSource = "set" | "change";

export interface ChangingValue<T extends object> {
  source: ChangingSource;
  values: Partial<T>;
}

/**
 * using form props
 */
export interface UsingForm<T extends object> {
  /**
   * change callback
   */
  onChange?: (changedFieldsValue: Partial<T>, fieldsValue: Partial<T>) => void;
}

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

  /**
   * registed fields in form
   */
  fieldsRef: RefObject<Set<K>>;

  /**
   * values$ subject
   */
  fieldsValue$: RefObject<Subject<ChangingValue<T>> | null>;
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
