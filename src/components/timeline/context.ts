import { createContext } from "react";
import { ContextValue } from "./types";

export const Context = createContext<ContextValue>({
  mode: "right",
});
