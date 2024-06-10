import type { PropsWithoutRef, ReactNode, RefAttributes } from "react";
import type { DeepPartial, FieldValues, UseFormReturn } from "react-hook-form";

/**
 * @author murukal
 * @description
 * form props
 */
export interface FormProps<T extends FieldValues> {
  /**
   * @description
   * default form values
   *
   * render form only once
   * @default void 0
   */
  defaultValues?: T;

  /**
   * @description
   * children
   * @default void 0
   */
  children?: ReactNode;

  /**
   * @description
   * form change handler
   * @default void 0
   */
  onChange?: (values: DeepPartial<T>) => void;

  /**
   * @description
   * form submit handler
   * @default void 0
   */
  onSubmit?: (values: T) => void;

  /**
   * @description
   * label col
   * @default void 0
   */
  labelCol?: ContextValue["labelCol"];

  /**
   * @description
   * wrapper col
   * @default void 0
   */
  wrapperCol?: ContextValue["wrapperCol"];

  /**
   * @description
   * form instance
   * @default void 0
   */
  form?: UseFormReturn<T>;
}

/**
 * @author murukal
 * @description
 *
 * form item props
 */
export interface FormItemProps<T extends FieldValues = FieldValues>
  extends Pick<FormProps<T>, "labelCol" | "wrapperCol"> {
  /**
   * @description
   * name
   */
  name?: string;

  /**
   * @description
   * children
   */
  children?: ReactNode;

  /**
   * @description
   * required
   */
  required?: boolean;

  /**
   * @description
   * label
   */
  label?: string;
}

/**
 * @author murukal
 * @description
 * form context
 */
export interface ContextValue {
  /**
   * @description
   * labelCol
   */
  labelCol: number;

  /**
   * @description
   * wrapperCol
   */
  wrapperCol: number;
}

/**
 * @description
 * typed form
 */
export interface TypedForm {
  <T extends FieldValues = FieldValues>(
    props: PropsWithoutRef<FormProps<T> & RefAttributes<UseFormReturn<T>>>
  ): ReactNode;

  /**
   * @description
   * item component
   */
  Item: <S extends FieldValues = FieldValues>(props: FormItemProps<S>) => ReactNode;

  /**
   * @description
   * form instance
   */
  useForm: <R extends FieldValues = FieldValues>(usedForm?: UseFormReturn<R>) => UseFormReturn<R>;
}
