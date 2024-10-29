import { createContext } from "react";
import type { ContextValue } from "musae/types/form";

/**
 * @description
 * class names
 */
export const CLASS_NAMES = {
  form: "form",
  item: "form__item",
  field: "form__item-field",
  fieldSupporting: "form__item-supporting",
  fieldError: "form__item-field-error",
} as const;

export const CONTEXT_VALUE: Readonly<ContextValue> = {
  labelCol: 24,
  wrapperCol: 24,
};

export const Context = createContext<ContextValue & { classNames: typeof CLASS_NAMES }>({
  ...CONTEXT_VALUE,
  classNames: CLASS_NAMES,
});
