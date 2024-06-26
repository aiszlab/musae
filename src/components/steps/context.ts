import { createContext } from "react";
import type { ContextValue } from "./types";

export const Context = createContext<ContextValue>({
  type: "horizontal",
  max: 0,
  value: 0,
});
