import { createContext } from "react";
import type { FieldsValue } from "../../../utils/form";

interface ContextValue<V extends FieldsValue> {
  fields?: string[];
  onChange?: (field: string, value: V) => void;
  values?: V[];
}

/**
 * `List` Context
 */
const Context = createContext<ContextValue<{}>>({});

export { Context };
