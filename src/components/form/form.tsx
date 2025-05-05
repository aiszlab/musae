import { FORM_TOKEN, type FieldsValue } from "../../utils/form";
import React from "react";
import Context, { CLASS_NAMES } from "./context";
import { useForm } from "./use-form";
import { useClassNames } from "../../hooks/use-class-names";
import { DEFAULT_CONTEXT_VALUE } from "./context";
import type { FormProps } from "../../types/form";

/**
 * Form Component
 *
 * @author murukal <tutu@fantufantu.com>
 */
const Form = <T extends FieldsValue>({ children, form }: FormProps<T>) => {
  const _form = useForm({ form });
  const classNames = useClassNames(CLASS_NAMES);

  return (
    <Context.Provider value={{ ...DEFAULT_CONTEXT_VALUE, form: _form[FORM_TOKEN], classNames }}>
      <form>{children}</form>
    </Context.Provider>
  );
};

export default Form;
