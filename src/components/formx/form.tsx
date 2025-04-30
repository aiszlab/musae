import { FormProps } from "../../types/formx";
import React from "react";
import Context from "./context";
import { useForm, FORM_TOKEN } from "./use-form";

/**
 * Form Component
 *
 * @author murukal <tutu@fantufantu.com>
 */
const Form = <T extends object, K extends keyof T = keyof T>({ children }: FormProps<T, K>) => {
  const form = useForm({});

  return (
    <Context.Provider value={{ form: form[FORM_TOKEN] }}>
      <form>{children}</form>
    </Context.Provider>
  );
};

export default Form;
