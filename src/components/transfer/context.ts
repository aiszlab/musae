import { createContext } from "react";
import { ContextValue } from "./types";

/**
 * @description
 * transfer context
 */
export const Context = createContext<ContextValue>({
  disabled: false,
});
