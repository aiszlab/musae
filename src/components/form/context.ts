import { Nullable } from "@aiszlab/relax/types";
import { createContext, useContext } from "react";
import type { FieldsValue, Form } from "../../utils/form";

/**
 * class names
 */
export const CLASS_NAMES = {
  form: "form",
  item: "form__item",
  field: "form__item-field",
  fieldSupporting: "form__item-supporting",
  fieldError: "form__item-field-error",
} as const;

/**
 * Context
 */
export interface ContextValue<T extends FieldsValue = {}> {
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

export const DEFAULT_CONTEXT_VALUE: ContextValue & { classNames: typeof CLASS_NAMES } = {
  form: null,
  labelCol: 24,
  wrapperCol: 24,
  classNames: CLASS_NAMES,
};

const Context = createContext<ContextValue & { classNames: typeof CLASS_NAMES }>(
  DEFAULT_CONTEXT_VALUE,
);

export default Context;

export const useFormContext = <T extends FieldsValue = {}>() => {
  return useContext(Context) as unknown as ContextValue<T> & { classNames: typeof CLASS_NAMES };
};
