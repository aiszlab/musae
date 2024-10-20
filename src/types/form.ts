import type { PropsWithoutRef, ReactNode, RefAttributes, RefCallback } from "react";
import type { DeepPartial, FieldValues, UseFormReturn } from "react-hook-form";
import type { ComponentProps } from "./element";

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
   * value
   */
  value: unknown;

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

/**
 * @author murukal
 * @description
 * form props
 */
export interface FormProps<T extends FieldValues> extends ComponentProps {
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
  extends Pick<FormProps<T>, "labelCol" | "wrapperCol">,
    ComponentProps {
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

  /**
   * @description
   * support
   */
  support?: ReactNode;
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
    props: PropsWithoutRef<FormProps<T> & RefAttributes<UseFormReturn<T>>>,
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

/**
 * @description
 * form ref
 */
export type FormRef<T extends FieldValues = FieldValues> = UseFormReturn<T>;

/**
 * @description
 * form instance
 */
export type UsedForm<T extends FieldValues = FieldValues> = UseFormReturn<T>;
