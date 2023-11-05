import { isVoid, isArray } from "@aiszlab/relax";
import type { HasChildren, ReadableOptions, ToAddition, Value, ValueOrValues } from "./types";
import type { Option } from "../../types/option";

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

/**
 * @description
 * deep read
 */
export const readOptions = <T>(
  options: Option[],
  {
    toAddition,
    isTiled,
  }: {
    toAddition: ToAddition<T>;
    isTiled: boolean;
  }
) => {
  return options.reduce<[HasChildren<T>[], ReadableOptions]>(
    (prev, option) => {
      // has child, read deeply
      const [_additions, _readableOptions] = option.children
        ? readOptions(option.children, {
            toAddition,
            isTiled,
          })
        : [];

      // convert with children
      prev[0].push({
        ...toAddition(option),
        children: _additions,
      });

      if (isTiled && _readableOptions) {
        prev[1] = new Map([...prev[1].entries(), ..._readableOptions.entries()]);
      } else {
        prev[1].set(option.value, {
          label: option.label,
          children: _readableOptions,
        });
      }

      return prev;
    },
    [[], new Map()]
  );
};
