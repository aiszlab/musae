import { Nullable } from "@aiszlab/relax/types";
import { createContext, useContext } from "react";
import { type Form } from "./use-form";
import type { FieldsValue } from "./types";

/**
 * Context
 */
export interface ContextValue<T extends FieldsValue = {}> {
  /**
   * form instance
   */
  form: Nullable<Form<T>>;
}

const Context = createContext<ContextValue>({
  form: null,
});

export default Context;

export const useFormContext = <T extends FieldsValue = {}>() => {
  return useContext(Context) as unknown as ContextValue<T>;
};
