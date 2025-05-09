import type { CSSProperties, ReactNode } from "react";
import type { FieldsValue, Form, FORM_TOKEN, RegisteredField } from "../utils/form";
import type { Nullable } from "@aiszlab/relax/types";

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
  onChange?: (names: (keyof T)[], value: Partial<T>) => void;
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

/**
 * form item props
 */
interface FormItemProps<T extends FieldsValue, FieldKey extends keyof T>
  extends Pick<RegisteredField<T, FieldKey>, "rules"> {
  /**
   * name
   */
  name?: FieldKey;

  /**
   * required field
   */
  required?: boolean;

  /**
   * class name
   */
  className?: string;

  /**
   * style
   */
  style?: CSSProperties;

  /**
   * supporting
   */
  supporting?: ReactNode;

  /**
   * label
   */
  label?: ReactNode;

  /**
   * labelCol
   */
  labelCol?: number;

  /**
   * wrapperCol
   */
  wrapperCol?: number;

  /**
   * children
   */
  children?: ReactNode;
}

/**
 * Context value type
 */
interface ContextValue<T extends FieldsValue = {}> {
  /**
   * form instance
   */
  form: Nullable<Form<T>>;

  /**
   * labelCol
   */
  labelCol: number;

  /**
   * wrapperCol
   */
  wrapperCol: number;
}

export { FormProps, FormItemProps, TypedForm, FieldsValue, ContextValue, UsedForm, UsingForm };
