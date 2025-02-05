import { createContext } from "react";
import type { ContextValue } from "../../types/checkbox";

/**
 * @description
 * checkbox class names
 */
export const CLASS_NAMES = {
  check: "checkbox",
  layer: "checkbox__layer",
  inputer: "checkbox__inputer",
  input: "checkbox__input",
  label: "checkbox__label",
};

const Context = createContext<ContextValue | null>(null);

export default Context;
