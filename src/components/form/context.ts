import { createContext } from "react";
import { ContextValue } from "musae/types/form";

export const CONTEXT_VALUE: Readonly<ContextValue> = {
  labelCol: 24,
  wrapperCol: 24,
};

const Context = createContext<ContextValue>(CONTEXT_VALUE);

export default Context;
