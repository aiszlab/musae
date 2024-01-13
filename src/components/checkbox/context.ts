import { createContext } from "react";
import { ContextValue } from "./types";

const Context = createContext<ContextValue | null>(null);

export default Context;
