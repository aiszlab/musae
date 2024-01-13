import { createContext } from "react";
import { ContextValue } from "./types";

export const DEFAULT_CONTEXT_VALUE: Readonly<ContextValue> = {
  labelCol: 24,
  wrapperCol: 24,
};

const Context = createContext<ContextValue>(DEFAULT_CONTEXT_VALUE);

export default Context;
