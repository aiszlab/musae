import { createContext } from "react";
import { FieldsValue } from "../../../utils/form";

interface ContextValue<V extends FieldsValue> {
  onChange?: (field: string, value: V) => void;
  values?: V[];
  fields: string[];
}

/**
 * `List` Context
 */
const Context = createContext<ContextValue<{}>>({
  fields: [],
});

export { Context };
