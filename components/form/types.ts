import type { ExoticComponent, ReactNode } from "react";
import type {
  DeepPartial,
  FieldError,
  FieldErrors,
  FieldPath,
  FieldValues,
  UseFormGetValues,
  UseFormTrigger,
} from "react-hook-form";

/**
 * @author murukal
 * @description
 * form ref
 */
export interface FormRef<T extends FieldValues> {
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
  getFieldsError: (namePaths?: FieldPath<T>[]) => FieldErrors<T> | null;

  /**
   * @description
   * get single field value
   */
  getFieldError: (namePath: FieldPath<T>) => FieldError | undefined;

  /**
   * @description
   * get single field error
   */
  getValues: UseFormGetValues<T>;
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
export interface TypedForm<T extends FieldValues = FieldValues> extends ExoticComponent<FormProps<T>> {
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
