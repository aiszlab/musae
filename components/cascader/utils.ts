import type { Key } from "react";
import type { ReadBy, ReadableOptions } from "./types";

/**
 * @description
 * read options
 */
export const readOptions = ({ options = [], from = 1, paths = [] }: ReadBy) => {
  return options.reduce<[ReadableOptions, Map<number, Key[]>, number]>(
    (prev, option) => {
      const [collected, uniqueIds, next] = prev;
      const _paths = [...paths, option.value];

      // has child, read deeply
      const [_readableOptions, _uniqueIds, _next] = option.children
        ? readOptions({
            options: option.children,
            from: next,
            paths: _paths,
          })
        : [void 0, void 0, from];

      // for option map, set new value
      collected.set(option.value, {
        label: option.label ?? option.value.toString(),
        children: _readableOptions,
      });

      // sum unique keys into one map
      prev[1] = (
        _uniqueIds
          ? // i need a easy way to merge 2 maps
            new Map([...uniqueIds.entries(), ..._uniqueIds.entries()])
          : uniqueIds
      ).set(next, _paths);

      // for unique key, plus 1
      prev[2] = _next + 1;

      return prev;
    },
    [new Map(), new Map(), from]
  );
};
