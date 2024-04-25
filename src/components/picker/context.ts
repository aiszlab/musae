import { createContext } from "react";
import { ContextValue } from "./types";

export const Context = createContext<ContextValue>({
  open: null,
  isFocused: false,
  isVisible: false,
});
