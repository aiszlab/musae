import { createContext } from "react";
import type { ContextValue } from "musae/types/avatar";

/**
 * @description
 * context
 */
export const Context = createContext<ContextValue | null>(null);
