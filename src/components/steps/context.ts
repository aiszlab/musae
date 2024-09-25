import { createContext } from "react";
import type { ContextValue } from "musae/types/steps";

export const Context = createContext<ContextValue>({
  type: "horizontal",
  max: 0,
  value: 0,
});
