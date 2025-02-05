import { createContext } from "react";
import type { ContextValue } from "../../types/avatar";

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
const Context = createContext<ContextValue | null>(null);

export default Context;
export { CLASS_NAMES };
