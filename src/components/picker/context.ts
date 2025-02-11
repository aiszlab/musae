import { createContext } from "react";
import type { ContextValue } from "../../types/picker";

export const CLASS_NAMES = {
  picker: "picker",
  focused: "picker--focused",
  invalid: "picker--invalid",
  dropdown: "picker__dropdown",
} as const;

export const Context = createContext<ContextValue>({
  open: null,
  isFocused: false,
  isOpen: false,
});
