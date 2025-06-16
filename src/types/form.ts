import type { CSSProperties, FC, ReactNode } from "react";
import type { FieldsValue, Form, Rule, FORM_TOKEN, ChangeHandler } from "../utils/form";
import type { Nullable, Partialable } from "@aiszlab/relax/types";
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
  onChange?: ChangeHandler<T>;
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

  /**
   * form value change handler
   */
  onChange?: (names: (keyof T)[], value: Partial<T>) => void;

  /**
   * default value
   */
  defaultValue?: Partial<T>;

  /**
   * controlled value
   * @description
   * if `value` is provided, `Form` will be controlled
   */
  value?: Partial<T>;
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
   * `List` Component
   */
  List: <T extends FieldsValue, FieldKey extends keyof T = keyof T>(
    props: FormListProps<T, FieldKey>,
  ) => ReactNode;

  /**
   * `Form` hook
   */
  useForm<T extends FieldsValue>(props?: UsingForm<T>): UsedForm<T>;

  /**
   * `Watch` hook
   */
  useWatch<T extends FieldsValue, FieldKey extends keyof T = keyof T>(
    name: FieldKey,
  ): Partialable<T[FieldKey]>;
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
interface ContextValue {
  /**
   * labelCol
   */
  labelCol: number;

  /**
   * wrapperCol
   */
  wrapperCol: number;
}

/**
 * form context value
 */
interface FormContextValue<T extends FieldsValue = {}> {
  /**
   * form instance
   */
  form: Nullable<Form<T>>;
}

/**
 * form list field
 */
interface FormListField {
  /**
   * field name
   */
  name: number;
}

/**
 * form list props
 */
interface FormListProps<T extends FieldsValue, FieldKey extends keyof T>
  extends Omit<FormItemProps<T, FieldKey>, "children"> {
  /**
   * children render
   */
  children?: FC<{
    fields: FormListField[];
    add: () => void;
    remove: (index: number) => void;
  }>;
}

export {
  FormProps,
  FormItemProps,
  TypedForm,
  FieldsValue,
  ContextValue,
  UsedForm,
  UsingForm,
  FormListField,
  FormListProps,
  FormContextValue,
};
