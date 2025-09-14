import { createContext, useContext } from "react";
import type { ContextValue, FieldsValue, FormContextValue, UseFormContext } from "../../types/form";
import { label } from "motion/react-client";

/**
 * class names
 */
export const CLASS_NAMES = {
  form: "form",
  item: "form__item",
  label: "form__item-label",
  field: "form__item-field",
  fieldSupporting: "form__item-supporting",
  fieldError: "form__item-field-error",
} as const;

export const DEFAULT_CONTEXT_VALUE: ContextValue = {
  labelCol: 24,
  wrapperCol: 24,
};

const Context = createContext<ContextValue & { classNames: typeof CLASS_NAMES }>({
  ...DEFAULT_CONTEXT_VALUE,
  classNames: CLASS_NAMES,
});

export default Context;

/**
 * form context
 */
export const FormContext = createContext<FormContextValue>({ form: null });

export const useFormContext: UseFormContext = <T extends FieldsValue = {}>() => {
  return useContext(FormContext) as FormContextValue<T>;
};
