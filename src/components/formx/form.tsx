import { FormProps } from "../../types/formx";
import React from "react";
import Context from "./context";
import { useForm } from "./hooks";

/**
 * Form Component
 *
 * @author murukal <tutu@fantufantu.com>
 */
const Form = <T extends object, K extends keyof T = keyof T>({ children }: FormProps<T, K>) => {
  const { fieldsValue$, fieldsRef } = useForm({});

  return (
    <Context.Provider value={{ fieldsValue$, fieldsRef, itemsRef: null }}>
      <form>{children}</form>
    </Context.Provider>
  );
};

export default Form;
