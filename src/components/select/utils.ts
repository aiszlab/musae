import { isVoid, isArray } from "@aiszlab/relax";
import type { ReadableOptions, ToMenuItem, Value, ValueOrValues } from "./types";
import type { Option } from "../../types/option";
import type { MenuItem } from "../menu";

/**
 * @description
 * convert to value array
 */
export const toValues = (valueOrValues?: ValueOrValues) => {
  // empty
  if (isVoid(valueOrValues)) return [];
  // already array
  if (isArray(valueOrValues)) return valueOrValues;
  // convert to array
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

/**
 * @description
 * convert to option
 */
export const toOption = (value: Value): Pick<Option, "value" | "label"> => {
  if (typeof value === "object") {
    return value;
  }
  return {
    value,
    label: value.toString(),
  };
};

/**
 * @description
 * deep read options
 */
export const readOptions = (options: Option[], toMenuItem: ToMenuItem) => {
  return options.reduce<[MenuItem[], ReadableOptions]>(
    (prev, option) => {
      // has child, read deeply
      const [_additions, _readableOptions] = option.children ? readOptions(option.children, toMenuItem) : [];

      // convert with children
      prev[0].push({
        ...toMenuItem(option),
        children: _additions,
      });

      if (_readableOptions) {
        prev[1] = new Map([...prev[1].entries(), ..._readableOptions.entries()]);
      } else {
        prev[1].set(option.value, option.label ?? option.value.toString());
      }

      return prev;
    },
    [[], new Map()]
  );
};
