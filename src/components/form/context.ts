import { createContext, useContext } from "react";
import type { ContextValue, FieldsValue, FormContextValue } from "../../types/form";

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

export const DEFAULT_CONTEXT_VALUE: ContextValue & { classNames: typeof CLASS_NAMES } = {
  labelCol: 24,
  wrapperCol: 24,
  classNames: CLASS_NAMES,
};

const Context = createContext<ContextValue & { classNames: typeof CLASS_NAMES }>(
  DEFAULT_CONTEXT_VALUE,
);

export default Context;

/**
 * form context
 */
export const FormContext = createContext<FormContextValue>({ form: null });

export const useFormContext = <T extends FieldsValue = {}>() => {
  return useContext(Context) as unknown as FormContextValue<T>;
};
