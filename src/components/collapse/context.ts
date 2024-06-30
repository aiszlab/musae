import { createContext } from "react";
import type { ContextValue } from "./types";

/**
 * @description
 * `Collapse` Context
 */
export const Context = createContext<ContextValue>({
  activeKeys: new Set(),
  toggle: () => {},
});
