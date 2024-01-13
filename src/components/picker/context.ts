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
});

export default Context;
