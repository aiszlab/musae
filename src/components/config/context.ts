import { createContext } from "react";
import { DEFAULT_CLASS_NAMES } from "../../utils/class-name";
import type { ContextValue } from "musae/types/config";

const Context = createContext<ContextValue>({
  notifier: null,
  classNames: DEFAULT_CLASS_NAMES,
});

export default Context;
