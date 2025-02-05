import { createContext } from "react";
import type { ContextValue } from "../../types/config";

const Context = createContext<ContextValue>({
  notifier: null,
  prefix: "musae",
});

export default Context;
