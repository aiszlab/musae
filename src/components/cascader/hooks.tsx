import { useCallback, useMemo, useState, type Dispatch, type SetStateAction } from "react";
import { useControlledState } from "@aiszlab/relax";
import { readOptions, toKey, toKeys, toMenuItem, toValues } from "./utils";
import { type MenuItem } from "../menu";
import type { CascaderProps, Optionable, ReadableOptions, ReadablePaths } from "./types";
import type { Partialable } from "@aiszlab/relax/types";

/**
 * @description
 * cascader value
 */
export const useValue = ([valueInProps, readableOptions, readablePaths, mode, close, setAdditionalMenusItems]: [
  CascaderProps["value"],
  ReadableOptions,
  ReadablePaths,
  CascaderProps["mode"],
  close: VoidFunction,
  Dispatch<SetStateAction<MenuItem[][]>>
]) => {
  const [_value, setValue] = useControlledState(valueInProps);

  /// convert value
  const values = useMemo(() => {
    return toValues(_value).reduce<Map<number, Optionable[]>>((prev, keysOrOptions) => {
      /// read item id for menu
      const [id, options] = keysOrOptions.reduce<[Partialable<number>, Optionable[], Partialable<ReadableOptions>]>(
        (prev, keyOrOption) => {
          const key = toKey(keyOrOption);
          const currentOption = prev[2]?.get(key);
          const currentId = currentOption?.id;

          prev[0] = currentId;
          currentOption &&
            prev[1].push({
              label: currentOption.label,
              value: key,
            });
          prev[2] = currentOption?.children;
          return prev;
        },
        [void 0, [], readableOptions]
      );

      /// set item
      return id ? prev.set(id, options) : prev;
    }, new Map());
  }, [_value, readableOptions]);

  /// change handler
  const onChange = useCallback(
    (id: number) => {
      // on menu click, when menu has children, add submenu
      // when menu has no children, just change value and close dropdown
      const _paths = readablePaths.get(id)!;
      const _values = _paths.map((optionable) => optionable.value);

      const [hasChildren, menusItems] = _values.reduce<[boolean, MenuItem[][], Partialable<ReadableOptions>]>(
        (prev, key) => {
          const _option = prev[2]?.get(key);
          // check has children
          prev[0] = !!_option?.children;
          // add submenus
          _option?.children && prev[1].push([..._option.children.values()].map((option) => toMenuItem(option)));
          // pass children
          prev[2] = _option?.children;
          return prev;
        },
        [false, [], readableOptions]
      );

      // display submenus
      setAdditionalMenusItems(menusItems);

      // if current menu has children, just display
      if (hasChildren) return;
      // if this select is single mode, just use key value
      // close dropdown after click
      if (!mode) {
        setValue(_values);
        close();
        return;
      }
      /// in multiple mode
      /// click menu item twice mean cancel it
      /// else add current values
      const isRemoved = values.has(id) && values.delete(id);
      setValue([...[...values.values()].map(toKeys), ...(isRemoved ? [] : [_values])]);
    },
    [readablePaths, readableOptions, mode, values, setValue, setAdditionalMenusItems, close]
  );

  return {
    values,
    onChange,
  };
};

/**
 * @description
 * options
 */
export const useOptions = ([options]: [options: CascaderProps["options"]]) => {
  const [readableOptions, readablePaths] = useMemo(() => {
    return readOptions({
      options,
    });
  }, [options]);

  /// menus split into 2 parts
  /// 1. preseted menu items
  /// 2. dynamic menu items
  const presetedMenuItems = useMemo(() => {
    return [...readableOptions.values()].map((option) => toMenuItem(option));
  }, [readableOptions]);

  const [additionalMenusItems, setAdditionalMenusItems] = useState<MenuItem[][]>([]);

  return {
    presetedMenuItems,
    additionalMenusItems,
    readableOptions,
    readablePaths,
    setAdditionalMenusItems,
  };
};
