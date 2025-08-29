import { createContext } from "react";
import type { FieldsValue } from "../../../utils/form";
import { type Fields } from "./fields";

interface ContextValue<V extends FieldsValue> {
  fields?: Fields;
  onChange?: (field: string, value: V) => void;
  values?: V[];
}

/**
 * `List` Context
 */
const Context = createContext<ContextValue<{}>>({});

export { Context };
