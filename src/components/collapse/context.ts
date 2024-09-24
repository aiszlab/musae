import { createContext } from "react";
import type { ContextValue } from "musae/types/collapse";

/**
 * @description
 * `Collapse` Context
 */
export const Context = createContext<ContextValue>({
  activeKeys: new Set(),
  toggle: () => {},
});
