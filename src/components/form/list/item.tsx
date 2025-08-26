import React, { useContext, useMemo } from "react";
import { type FieldsValue, type FormListItemProps } from "../../../types/form";
import { Context } from "./context";
import { FormContext } from "../context";
import { at, useEvent } from "@aiszlab/relax";
import { useForm } from "../use-form";
import { FORM_TOKEN } from "../../../utils/form";

/**
 * internal `List`.`Item` Component
 */
function Item({ field, children }: FormListItemProps) {
  const { onChange, values, fields } = useContext(Context);

  // current field form value
  const value = useMemo(() => {
    if (!values || values.length === 0) return void 0;
    return at(values, fields.indexOf(field));
  }, [values, fields, field]);

  // value change handler
  const changeFieldValue = useEvent((_names, value) => {
    onChange?.(field, value);
  });

  // create form instance
  const _form = useForm<FieldsValue>({
    value,
    onChange: changeFieldValue,
  });

  return (
    <FormContext.Provider value={{ form: _form[FORM_TOKEN] }}>{children}</FormContext.Provider>
  );
}

export { Item };
