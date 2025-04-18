import { Nullable } from "@aiszlab/relax/types";
import { createContext, RefObject } from "react";

/**
 * Context
 */
interface ContextValue {
  /**
   * Items ref
   * @description When Item is mounted, it will be added to this ref
   */
  itemsRef: Nullable<RefObject<HTMLDivElement>>;
}

const Context = createContext<ContextValue>({
  itemsRef: null,
});
