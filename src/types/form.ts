import type { CSSProperties, ReactNode } from "react";
import type { FieldsValue, Form, Rule, FORM_TOKEN, RegisteredField } from "../utils/form";
import type { Nullable } from "@aiszlab/relax/types";
import type { ComponentProps } from "./element";

/**
 * form hook return
 */
interface UsedForm<T extends FieldsValue> {
  /**
   * set field value
   */
  setFieldValue(name: keyof T, value: T[keyof T]): void;

  /**
   * reset fields value and clear errors
   */
  reset(): void;

  /**
   * clear fields value and clear errors
   */
  clear(): void;

  /**
   * validate
   */
  validate: () => Promise<boolean>;

  /**
   * get fields value
   */
  getFieldsValue: () => Partial<T>;

  /**
   * form instance
   */
  [FORM_TOKEN]: Form<T>;
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
interface FormProps<T extends FieldsValue> extends ComponentProps {
  /**
   * used form instance
   * use `form` can control `Form` value
   */
  form?: UsedForm<T>;

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
   * `Form` hook
   */
  useForm<T extends FieldsValue>(props?: UsingForm<T>): UsedForm<T>;
}

/**
 * form item props
 */
interface FormItemProps<T extends FieldsValue, FieldKey extends keyof T> {
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

  /**
   * rules
   */
  rules?: Rule<T, FieldKey>[];
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
