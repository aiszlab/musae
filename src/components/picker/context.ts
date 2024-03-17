import { createContext } from "react";
import { type ContextValue } from "./types";

/**
 * @author murukal
 *
 * @description
 * context
 */
const Context = createContext<ContextValue>({
  isVisible: false,
  getDropdownWidth: () => void 0,
});

export default Context;
