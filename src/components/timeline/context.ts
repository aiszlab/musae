import { createContext } from "react";
import type { ContextValue } from "musae/types/timeline";

export const Context = createContext<ContextValue>({
  mode: "right",
  max: 0,
});
