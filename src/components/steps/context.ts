import { createContext } from "react";
import type { ContextValue } from "./types";

export const Context = createContext<ContextValue>({
  type: "horizontal",
});
