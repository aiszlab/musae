import { createContext } from "react";
import { DEFAULT_CLASS_NAMES } from "../../utils/class-name";
import type { ContextValue } from "./types";

const Context = createContext<ContextValue>({
  messager: null,
  classNames: DEFAULT_CLASS_NAMES,
});

export default Context;
