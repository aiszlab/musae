import React, { useMemo } from "react";
import Context from "./context";
import { ContextValue, FormProps } from "./types";

const _Provider = Context.Provider;

const Form = <T,>(props: FormProps<T>) => {
  const contextValue = useMemo<ContextValue<T>>(() => {
    return {
      values: "1" as unknown as T,
      onChange: () => {},
    };
  }, []);

  return <_Provider value={contextValue}></_Provider>;
};

export default Form;
