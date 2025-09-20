import React, { useContext, useMemo } from "react";
import { type FieldsValue, type FormListItemProps } from "../../../types/form";
import { Context } from "./context";
import { FormContext } from "../context";
import { at, useEvent } from "@aiszlab/relax";
import { useForm } from "../hooks/use-form";
import { type ChangeHandler, Form, FORM_TOKEN } from "../../../utils/form";

/**
 * internal `List`.`Item` Component
 */
function Item<T extends FieldsValue>({ field, children, form }: FormListItemProps<T>) {
  const { onChange, values, fields } = useContext(Context);

  // current field form value
  const value = useMemo(() => {
    return at(values ?? [], fields?.indexOf(field) ?? Infinity);
  }, [values, fields, field]);

  // value change handler
  const changeFieldValue = useEvent<ChangeHandler<T>>((value) => {
    onChange?.(field, value);
  });

  // create form instance
  const _form = useForm<T>({
    form,
    value,
    onChange: changeFieldValue,
  });

  return (
    <FormContext.Provider value={{ form: _form[FORM_TOKEN] as Form<FieldsValue> }}>
      {children}
    </FormContext.Provider>
  );
}

export { Item };
