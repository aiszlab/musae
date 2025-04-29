import { Nullable } from "@aiszlab/relax/types";
import { createContext, RefObject, useContext } from "react";
import { type Subject } from "rxjs";
import { ChangingValue } from "../../types/formx";

/**
 * Context
 */
interface ContextValue<T extends object = {}> {
  /**
   * Items ref
   * @description When Item is mounted, it will be added to this ref
   */
  itemsRef: Nullable<RefObject<HTMLDivElement>>;

  /**
   * Values$ subject
   * @description all values will be emitted to this subject
   */
  fieldsValue$: Nullable<RefObject<Subject<ChangingValue<T>> | null>>;

  /**
   * registed fields in form
   */
  fieldsRef: Nullable<RefObject<Set<keyof T>>>;
}

const Context = createContext<ContextValue>({
  itemsRef: null,
  fieldsValue$: null,
  fieldsRef: null,
});

export default Context;

export const useFormContext = <T extends object = {}>() => {
  return useContext(Context) as unknown as ContextValue<T>;
};
