import { Nullable } from "@aiszlab/relax/types";
import { createContext, RefObject, useContext } from "react";
import { type Subject } from "rxjs";

/**
 * Context
 */
interface ContextValue {
  /**
   * Items ref
   * @description When Item is mounted, it will be added to this ref
   */
  itemsRef: Nullable<RefObject<HTMLDivElement>>;

  /**
   * values$ subject
   * @description all values will be emitted to this subject
   */
  value$Refs: Nullable<RefObject<Map<string, Subject<unknown>>>>;
}

const Context = createContext<ContextValue>({
  itemsRef: null,
  value$Refs: null,
});

export default Context;

export const useFormContext = () => {
  return useContext(Context);
};
