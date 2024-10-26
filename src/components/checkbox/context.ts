import { createContext } from "react";
import type { ContextValue } from "musae/types/checkbox";

/**
 * @description
 * checkbox class names
 */
export const CLASS_NAMES = {
  check: "checkbox",
  input: "checkbox__input",
  label: "checkbox__label",
};

const Context = createContext<ContextValue | null>(null);

export default Context;
