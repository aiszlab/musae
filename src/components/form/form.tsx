import { FORM_TOKEN, type FieldsValue } from "../../utils/form";
import React from "react";
import Context, { CLASS_NAMES } from "./context";
import { useForm } from "./hooks/use-form";
import { useClassNames } from "../../hooks/use-class-names";
import { DEFAULT_CONTEXT_VALUE } from "./context";
import type { FormProps } from "../../types/form";
import { stringify } from "@aiszlab/relax/class-name";
import { FormContext } from "./context";
import { props as $props } from "@stylexjs/stylex";
import styles from "./styles";

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
  layout = "default",
}: FormProps<T>) => {
  const _form = useForm({ form, onChange, value, defaultValue });
  const classNames = useClassNames(CLASS_NAMES);
  const styled = $props(styles.form.base, layout === "inline" && styles.form.inline);

  return (
    <Context.Provider
      value={{
        ...DEFAULT_CONTEXT_VALUE,
        classNames,
      }}
    >
      <FormContext.Provider
        value={{
          // @ts-expect-error `Context`内部固定类型
          form: _form[FORM_TOKEN],
        }}
      >
        <form
          className={stringify(classNames.form, styled.className, className)}
          style={{ ...styled.style, ...style }}
        >
          {children}
        </form>
      </FormContext.Provider>
    </Context.Provider>
  );
};

export default Form;
