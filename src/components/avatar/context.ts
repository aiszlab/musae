import { createContext } from "react";
import type { ContextValue } from "musae/types/avatar";

/**
 * @description
 * class names
 */
const CLASS_NAMES = {
  avatar: "avatar",
  group: "avatar__group",
};

/**
 * @description
 * context
 */
const Context = createContext<ContextValue>({});

export default Context;
export { CLASS_NAMES };
