import { createContext } from "react";
import { type ContextValue } from "./types";

/**
 * @description
 * context
 */
export const Context = createContext<ContextValue | null>(null);
