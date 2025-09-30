import type { Filter, Mode, ReadableOptions, Value } from "../../types/select";
import type { Option } from "../../types/option";
import type { MenuItem } from "../../types/menu";
import { isObject } from "@aiszlab/relax";
import type { Key } from "react";
import type { RequiredIn } from "@aiszlab/relax/types";

/**
 * @description
 * convert select option into menu item
 */
export const toMenuItem = (option: Option | Key): RequiredIn<MenuItem, "key" | "label"> => {
  if (!isObject(option)) {
    return {
      key: option,
      label: option.toString(),
    };
  }

  return {
    key: option.value,
    label: option.label ?? option.value.toString(),
  };
};

/**
 * toKey
 * @description 获取传入值对应的`key`
 */
export const toKey = (value: Value) => {
  if (isObject(value)) {
    return value.value;
  }

  return value;
};

/**
 * @description
 * deep read options
 */
export const readOptions = (options: Option[], filter: Filter) => {
  return options.reduce<[MenuItem[], ReadableOptions]>(
    (prev, option) => {
      // first step, check current option is valid by filter
      if (!filter(option)) {
        return prev;
      }

      // has child, read deeply
      const [_additions, _readableOptions] = option.children
        ? readOptions(option.children, filter)
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
 * isMultiple
 * @description 判断是否为多选模式，在`tags`模式下，也遵循多选逻辑
 */
export function isMultiple(mode: Mode | undefined) {
  return mode === "multiple" || mode === "tags";
}
