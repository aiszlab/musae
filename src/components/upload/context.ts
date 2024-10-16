import { ContextValue } from "musae/types/upload";
import { createContext } from "react";

export const Context = createContext<ContextValue>({
  renderItem: void 0,
});
