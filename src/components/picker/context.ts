import { createContext } from "react";
import type { ContextValue } from "../../types/picker";

export const CLASS_NAMES = {
  picker: "picker",
  dropdown: "picker__dropdown",
} as const;

export const Context = createContext<ContextValue>({
  open: null,
  toggle: null,
  isOpen: false,
});
