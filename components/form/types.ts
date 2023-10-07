import type { ExoticComponent, ReactNode } from "react";
import type { DeepPartial, FieldValues } from "react-hook-form";

/**
 * @author murukal
 * @description
 * form ref
 */
export interface Form {
  /**
   * @description
   * validate
   */
  validate: () => Promise<boolean>;
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
}

/**
 * @author murukal
 * @description
 *
 * form item props
 */
export interface FormItemProps {
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
