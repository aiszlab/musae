import { createContext } from "react";
import type { ContextValue } from "./types";

const Context = createContext<ContextValue<unknown>>({});

export default Context;
