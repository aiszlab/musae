import type { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from "react";
import type {
  DeepPartial,
  FieldError,
  FieldErrors,
  FieldPath,
  FieldValues,
  UseFormGetValues,
  UseFormReset,
  UseFormTrigger,
} from "react-hook-form";
import type { Nullable, Partialable } from "@aiszlab/relax/types";

/**
 * @author murukal
 * @description
 * form ref
 */
export interface FormRef<T extends FieldValues = FieldValues> {
  /**
   * @description
   * validate
   * api design: for simple, just return boolean, it will not be rejected
   * if consumer want get errors, pls use api: getFieldsError after trigger validate
   */
  validate: UseFormTrigger<T>;

  /**
   * @description
   * get fields error
   * after trigger validate, fields may have error, pls use this api to get error message
   */
  getFieldsError: (namePaths?: FieldPath<T>[]) => Nullable<FieldErrors<T>>;

  /**
   * @description
   * get single field value
   */
  getFieldError: (namePath: FieldPath<T>) => Partialable<FieldError>;

  /**
   * @description
   * get single field error
   */
  getValues: UseFormGetValues<T>;

  /**
   * @description
   * reset form to default values, and clear all validation errors
   */
  reset: UseFormReset<T>;
}

/**
 * @author murukal
 * @description
 * form props
 */
export interface FormProps<T> {
  /**
   * @description
   * default form values
   *
   * render form only once
   */
  defaultValues?: T;

  /**
   * @description
   * children
   */
  children?: ReactNode;

  /**
   * @description
   * form change handler
   */
  onChange?: (values: DeepPartial<T>) => void;

  /**
   * @description
   * form submit handler
   */
  onSubmit?: (values: T) => void;

  /**
   * @description
   * label col
   */
  labelCol?: ContextValue["labelCol"];

  /**
   * @description
   * wrapper col
   */
  wrapperCol?: ContextValue["wrapperCol"];
}

/**
 * @author murukal
 * @description
 *
 * form item props
 */
export interface FormItemProps extends Pick<FormProps<unknown>, "labelCol" | "wrapperCol"> {
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
 * typed form
 */
export interface TypedForm<T extends FieldValues = FieldValues>
  extends ForwardRefExoticComponent<PropsWithoutRef<FormProps<T>> & RefAttributes<FormRef<T>>> {
  /* group */
  Item: (props: FormItemProps) => ReactNode;
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
