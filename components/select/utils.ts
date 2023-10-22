import { isVoid } from "@aiszlab/relax";
import { isArray } from "../../utils/array";
import type { Value, ValueOrValues } from "./types";

/**
 * @description
 * convert to value array
 */
export const toValues = (valueOrValues?: ValueOrValues) => {
  if (isVoid(valueOrValues)) return [];
  if (isArray(valueOrValues)) {
    return valueOrValues;
  }
  return [valueOrValues];
};

/**
 * @description
 * convert to key
 */
export const toKey = (value: Value) => {
  if (typeof value === "object") {
    return value.value;
  }
  return value;
};
