import { Nullable } from "@aiszlab/relax/types";
import { createContext, RefObject, useContext } from "react";
import { type Subject } from "rxjs";
import { UsedForm } from "../../types/formx";

/**
 * Context
 */
interface ContextValue<T extends object = {}, K extends keyof T = keyof T> {
  /**
   * Items ref
   * @description When Item is mounted, it will be added to this ref
   */
  itemsRef: Nullable<RefObject<HTMLDivElement>>;

  /**
   * Values$ subject
   * @description all values will be emitted to this subject
   */
  form: Nullable<UsedForm<T, K>>;
}

const Context = createContext<ContextValue>({
  itemsRef: null,
  form: null,
});

export default Context;

export const useFormContext = <T extends object = {}, K extends keyof T = keyof T>() => {
  return useContext(Context) as unknown as ContextValue<T, K>;
};
