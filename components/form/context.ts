import { createContext } from "react";
import type { ContextValue } from "./types";

const Context = createContext<ContextValue<unknown> | null>(null);

export default Context;
