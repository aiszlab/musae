import { createContext } from "react";
import type { ContextValue } from "./types";

/**
 * @description
 * context
 */
const Context = createContext<ContextValue>({});

export default Context;
