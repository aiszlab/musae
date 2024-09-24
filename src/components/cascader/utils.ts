import type {
  KeyOrOption,
  Optionable,
  ReadBy,
  ReadableOption,
  ReadableOptions,
  ReadablePaths,
  Value,
  ValueOrValues,
} from "musae/types/cascader";
import { isArray, isVoid } from "@aiszlab/relax";
import type { MenuItem } from "musae/types/menu";
import type { Option } from "musae/types/option";

/**
 * @description
 * read options
 */
export const readOptions = ({ options, from = 1, paths = [] }: ReadBy) => {
  return options.reduce<[ReadableOptions, ReadablePaths, number]>(
    (prev, option) => {
      const [collectedOptions, collectedPaths, next] = prev;

      const currentPaths: Optionable[] = [
        ...paths,
        {
          value: option.value,
          label: toLabel(option),
        },
      ];

      // read deeply
      const [children, readPaths, readId] = readOptions({
        options: option.children ?? [],
        from: next,
        paths: currentPaths,
      });

      // plus 1, for unique key
      const currentId = readId + 1;
      // for option map, set new value
      collectedOptions.set(option.value, {
        id: currentId,
        label: toLabel(option),
        children: children.size === 0 ? void 0 : children,
      });
      // sum unique keys into one map
      prev[1] = (
        readPaths.size === 0
          ? collectedPaths
          : new Map([...collectedPaths.entries(), ...readPaths.entries()])
      ).set(currentId, currentPaths);
      // record the latest id
      prev[2] = currentId;

      return prev;
    },
    [new Map(), new Map(), from],
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
 * convert readable option to menu item
 */
export const toMenuItem = (option: ReadableOption): MenuItem => {
  return {
    key: option.id,
    label: option.label,
  };
};

/**
 * @description
 * convert option or key to key
 */
export const toKey = (keyOrOption: KeyOrOption) => {
  if (typeof keyOrOption === "object") {
    return keyOrOption.value;
  }
  return keyOrOption;
};

/**
 * @description
 * convert options or keys to keys
 */
export const toKeys = (options: Optionable[]) => options.map(toKey);

/**
 * @description
 * convert to label
 */
const toLabel = (option: Option) => option.label ?? option.value.toString();
