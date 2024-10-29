import { createContext } from "react";
import type { ContextValue } from "musae/types/radio";

/**
 * @description
 * class name
 */
export const CLASS_NAMES = {
  radio: "radio",
};

export const Context = createContext<ContextValue | null>(null);
