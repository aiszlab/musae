import { FormProps } from "../../types/formx";
import React from "react";
import Context from "./context";

/**
 * Form Component
 *
 * @author murukal <tutu@fantufantu.com>
 */
const Form = <T extends object, K extends keyof T = keyof T>({ children }: FormProps<T, K>) => {
  return (
    <Context.Provider value={{ form: null, itemsRef: null }}>
      <form>{children}</form>
    </Context.Provider>
  );
};

export default Form;
