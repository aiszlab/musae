import type {
  KeyOrOption,
  Optionable,
  ReadBy,
  ReadableOption,
  ReadableOptions,
  ReadablePaths,
  Value,
  ValueOrValues,
} from "./types";
import { isArray, isVoid } from "@aiszlab/relax";
import type { Partialable } from "../../types/lib";
import type { MenuItemProps } from "../menu";

/**
 * @description
 * read options
 */
export const readOptions = ({ options = [], from = 1, paths = [] }: ReadBy) => {
  return options.reduce<[ReadableOptions, ReadablePaths, number]>(
    (prev, option) => {
      const [collectedOptions, collectedPaths, next] = prev;

      const currentPaths: Optionable[] = [
        ...paths,
        {
          value: option.value,
          label: option.label,
        },
      ];

      // read deeply
      const [children, readPaths, readId] = readOptions({
        options: option.children,
        from: next,
        paths: currentPaths,
      });

      // plus 1, for unique key
      const currentId = readId + 1;
      // for option map, set new value
      collectedOptions.set(option.value, {
        id: currentId,
        label: option.label ?? option.value.toString(),
        children: children.size === 0 ? void 0 : children,
      });
      // sum unique keys into one map
      prev[1] = (
        readPaths.size === 0 ? collectedPaths : new Map([...collectedPaths.entries(), ...readPaths.entries()])
      ).set(currentId, currentPaths);
      // record the latest id
      prev[2] = currentId;

      return prev;
    },
    [new Map(), new Map(), from]
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

/**
 * @description
 * convert readable option to menu item
 */
export const toMenuItem = (option: ReadableOption): MenuItemProps => {
  return {
    key: option.id,
    label: option.label,
  };
};

/**
 * @description
 * convert option or key to key
 */
const toKey = (option: Optionable) => {
  return option.value;
};

/**
 * @description
 * convert options or keys to keys
 */
export const toKeys = (options: Optionable[]) => options.map(toKey);
