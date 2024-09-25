import { createContext } from "react";
import type { ContextValue } from "musae/types/tabs";

const Context = createContext<ContextValue | null>(null);

export default Context;
