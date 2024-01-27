import { createContext } from "react";
import type { ContextValue } from "./types";

const Context = createContext<ContextValue<unknown>>({
  bordered: false,
});

export default Context;
