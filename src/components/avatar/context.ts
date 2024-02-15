import { createContext } from "react";
import { ContextValue } from "./types";

/**
 * @description
 * context
 */
export const Context = createContext<ContextValue | null>(null);
