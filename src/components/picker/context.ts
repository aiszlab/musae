import { createContext } from "react";
import { ContextValue } from "../../types/picker";

export const Context = createContext<ContextValue>({
  open: null,
  isFocused: false,
  isOpen: false,
});
