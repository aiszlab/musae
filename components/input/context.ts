import { createContext } from "react";
import { ContextValue } from "./types";

/**
 * @description
 * context
 */
const context = createContext<ContextValue>({});

export default context;
