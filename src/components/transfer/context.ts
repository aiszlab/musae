import { createContext } from "react";
import type { ContextValue } from "musae/types/transfer";

/**
 * @description
 * transfer context
 */
export const Context = createContext<ContextValue>({
  disabled: false,
});
