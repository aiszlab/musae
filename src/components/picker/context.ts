import { createContext } from "react";
import type { ContextValue } from "musae/types/picker";

export const Context = createContext<ContextValue>({
  open: null,
  isFocused: false,
  isOpen: false,
});
