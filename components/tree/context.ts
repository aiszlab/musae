import { createContext } from "react";
import { ContextValue } from "./types";

const Context = createContext<ContextValue>({
  selectedKeys: new Map(),
});

export default Context;
