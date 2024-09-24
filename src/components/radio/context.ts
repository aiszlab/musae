import { createContext } from "react";
import type { ContextValue } from "musae/types/radio";

const Context = createContext<ContextValue | null>(null);

export default Context;
