import { createContext } from "react";
import type { FieldsValue } from "../../../utils/form";

interface ContextValue<V extends FieldsValue> {
  onChange?: (field: number, value: V) => void;
  values?: V[];
}

/**
 * `List` Context
 */
const Context = createContext<ContextValue<{}>>({});

export { Context };
