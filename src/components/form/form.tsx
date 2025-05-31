import { FORM_TOKEN, type FieldsValue } from "../../utils/form";
import React from "react";
import Context, { CLASS_NAMES } from "./context";
import { useForm } from "./hooks";
import { useClassNames } from "../../hooks/use-class-names";
import { DEFAULT_CONTEXT_VALUE } from "./context";
import type { FormProps, UsedForm } from "../../types/form";
import { stringify } from "@aiszlab/relax/class-name";
import { FormContext } from "./context";

/**
 * Form Component
 *
 * @author murukal <tutu@fantufantu.com>
 */
const Form = <T extends FieldsValue>({
  children,
  form,
  className,
  style,
  onChange,
  value,
  defaultValue,
}: FormProps<T>) => {
  const _form = useForm({ form, onChange, value, defaultValue }) as unknown as UsedForm<{}>;
  const classNames = useClassNames(CLASS_NAMES);

  return (
    <Context.Provider
      value={{
        ...DEFAULT_CONTEXT_VALUE,
        classNames,
      }}
    >
      <FormContext.Provider value={{ form: _form[FORM_TOKEN] }}>
        <form className={stringify(classNames.form, className)} style={style}>
          {children}
        </form>
      </FormContext.Provider>
    </Context.Provider>
  );
};

export default Form;
