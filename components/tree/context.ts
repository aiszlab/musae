import { Key, createContext } from "react";
import { ContextValue } from "./types";

const Context = createContext<ContextValue>({
  checkedKeys: new Set<Key>(),
  expandedKeys: new Set<Key>(),
});

export default Context;
