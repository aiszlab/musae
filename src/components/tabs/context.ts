import { createContext } from "react";
import type { ContextValue } from "./types";

const Context = createContext<ContextValue | null>(null);

export default Context;
