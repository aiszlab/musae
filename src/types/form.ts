import type { ReactNode } from "react";
import type { FieldsValue, ContextValue, Form, FORM_TOKEN, FormItemProps } from "../utils/form";

/**
 * form hook return
 */
interface UsedForm<T extends FieldsValue> {
  /**
   * set field value
   */
  setFieldValue(name: PropertyKey, value: unknown): void;

  /**
   * reset fields value and clear errors
   */
  reset(): void;

  /**
   * clear fields value and clear errors
   */
  clear(): void;

  /**
   * form instance
   */
  [FORM_TOKEN]: Form<T>;

  /**
   * validate
   */
  validate: () => Promise<boolean>;

  /**
   * get fields value
   */
  getFieldsValue: () => Partial<T>;
}

/**
 * form hook props
 */
interface UsingForm<T extends FieldsValue> {
  /**
   * form default value
   */
  defaultValue?: Partial<T>;

  /**
   * registered form
   */
  form?: UsedForm<T>;

  /**
   * change handler
   */
  onChange?: (changedValue: Partial<T>, value: Partial<T>) => void;
}

/**
 * form props
 */
interface FormProps<T extends FieldsValue> {
  /**
   * used form instance
   * use `form` can control `Form` value
   */
  form: UsedForm<T>;

  /**
   * children components
   */
  children: ReactNode;
}

/**
 * typed form
 */
interface TypedForm {
  /**
   * `Form` Component
   */
  <T extends FieldsValue>(props: FormProps<T>): ReactNode;

  /**
   * `Item` Component
   */
  Item: <T extends FieldsValue, FieldKey extends keyof T = keyof T>(
    props: FormItemProps<T, FieldKey>,
  ) => ReactNode;

  /**
   * form hook
   */
  useForm<T extends FieldsValue>(props?: UsingForm<T>): UsedForm<T>;
}

export { FormProps, FormItemProps, TypedForm, FieldsValue, ContextValue, UsedForm, UsingForm };
