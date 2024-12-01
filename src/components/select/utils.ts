import { isVoid, toArray } from "@aiszlab/relax";
import type { Filter, ReadableOptions, ToMenuItem, Value, ValueOrValues } from "musae/types/select";
import type { Option } from "musae/types/option";
import type { MenuItem } from "musae/types/menu";

/**
 * @description
 * convert to value array
 */
export const toValues = (valueOrValues?: ValueOrValues) => {
  // empty
  if (isVoid(valueOrValues)) return [];
  // convert to array
  return toArray(valueOrValues);
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
export const readOptions = (options: Option[], toMenuItem: ToMenuItem, filter: Filter) => {
  return options.reduce<[MenuItem[], ReadableOptions]>(
    (prev, option) => {
      // first step, check current option is valid by filter
      if (!filter(option)) {
        return prev;
      }

      // has child, read deeply
      const [_additions, _readableOptions] = option.children
        ? readOptions(option.children, toMenuItem, filter)
        : [];

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
    [[], new Map()],
  );
};

/**
 * @description
 * convert select option into menu item
 */
export const toMenuItem: ToMenuItem = (option) => {
  return {
    key: option.value,
    label: option.label ?? option.value.toString(),
  };
};
