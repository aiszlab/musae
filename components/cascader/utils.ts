import type {
  KeyOrOption,
  Optionable,
  ReadBy,
  ReadableOptions,
  ReadablePaths,
  ReverseIds,
  Value,
  ValueOrValues,
} from "./types";
import type { Partialable } from "../../types/lib";
import { isArray, isVoid } from "@aiszlab/relax";

/**
 * @description
 * read options
 */
export const readOptions = ({ options = [], from = 1, paths = [] }: ReadBy) => {
  return options.reduce<[ReadableOptions, ReadablePaths, ReverseIds, number]>(
    (prev, option) => {
      const [collected, uniqueIds, reverseIds, next] = prev;

      const _paths: Optionable[] = [
        ...paths,
        {
          value: option.value,
          label: option.label,
        },
      ];

      // has child, read deeply
      const [_readableOptions, _idsWithPaths, _reverseIds, _next] = option.children
        ? readOptions({
            options: option.children,
            from: next,
            paths: _paths,
          })
        : [void 0, void 0, void 0, from];

      // for option map, set new value
      collected.set(option.value, {
        label: option.label ?? option.value.toString(),
        children: _readableOptions,
      });

      // sum unique keys into one map
      prev[1] = (_idsWithPaths ? new Map([...uniqueIds.entries(), ..._idsWithPaths.entries()]) : uniqueIds).set(
        next,
        _paths
      );

      const _id = _next + 1;

      // path with key
      _paths.reduce((prev, { value }, index) => {
        // leaf node, record id and children
        if (index === _paths.length - 1) {
          return prev.set(value, {
            id: _id,
            children: _reverseIds,
          });
        }
        // logged
        if (prev.has(value)) {
          return (prev.get(value)!.children ??= new Map());
        }
        // add current tree node
        return prev.set(value, { children: new Map() }).get(value)!.children!;
      }, reverseIds);

      // for unique key, plus 1
      prev[3] = _id;

      return prev;
    },
    [new Map(), new Map(), new Map(), from]
  );
};

/**
 * @description
 * is values array
 */
const isValues = (value: ValueOrValues): value is Exclude<ValueOrValues, Value> => {
  return value.every((_value) => isArray(_value));
};

/**
 * @description
 * convert to value in array
 */
export const toValues = (value?: ValueOrValues): Exclude<ValueOrValues, Value> => {
  // empty
  if (isVoid(value)) return [];
  // already array
  if (isValues(value)) return value;
  // convert to array
  return [value];
};

/**
 * @description
 * convert to option
 */
const toOption = (keyOrOption: KeyOrOption, readableOptions: ReadableOptions): Optionable => {
  if (typeof keyOrOption === "object") {
    return {
      value: keyOrOption.value,
      label: readableOptions.get(keyOrOption.value)?.label ?? keyOrOption.label ?? keyOrOption.value.toString(),
    };
  }

  return {
    value: keyOrOption,
    label: readableOptions.get(keyOrOption)?.label ?? keyOrOption.toString(),
  };
};

/**
 * @description
 * convert to options
 */
export const toOptions = (keysOrOptions: Value, readableOptions: ReadableOptions) => {
  return keysOrOptions.reduce<[Optionable[], Partialable<ReadableOptions>]>(
    (prev, keyOrOption) => {
      // value to option
      const option = toOption(keyOrOption, readableOptions);
      // option whick one is hit
      const hitOption = readableOptions.get(option.value);
      // push
      prev[0].push(option);
      prev[1] = hitOption?.children;

      return prev;
    },
    [[], readableOptions]
  );
};
