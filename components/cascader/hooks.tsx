import { useCallback, useMemo, useState } from "react";
import { useControlledState } from "@aiszlab/relax";
import { type MenuItemProps } from "../menu";
import { readOptions, toMenuItem, toOptions, toValues } from "./utils";
import type { CascaderProps, Optionable, ReadableOptions, ReadablePaths } from "./types";
import type { Partialable } from "../../types/lib";

/**
 * @description
 * cascader value
 */
export const useValue = ([valueInProps, readableOptions, readablePaths, mode, close]: [
  CascaderProps["value"],
  ReadableOptions,
  ReadablePaths,
  CascaderProps["mode"],
  close: VoidFunction
]) => {
  const [_value, setValue] = useControlledState(valueInProps);

  /// convert value
  const values = useMemo(() => {
    return toValues(_value).reduce<Map<number, Optionable[]>>((prev, keysOrOptions) => {
      const [options] = toOptions(keysOrOptions, readableOptions);

      /// read item id for menu
      const [id] = options.reduce<[Partialable<number>, Partialable<ReadableOptions>]>(
        ([_id, _readableOptions], option) => [
          _readableOptions?.get(option.value)?.id,
          _readableOptions?.get(option.value)?.children,
        ],
        [void 0, readableOptions]
      );

      /// set item
      return id ? prev.set(id, options) : prev;
    }, new Map());
  }, [_value, readableOptions]);

  /// change handler
  const onChange = useCallback(
    (id: number) => {
      const _paths = readablePaths.get(id)!;
      const _value = _paths.map((optionable) => optionable.value);

      /// if this select is single mode, just use key value
      /// close dropdown after click
      if (!mode) {
        close();
        setValue(_paths.map((optionable) => optionable.value));
        return;
      }

      /// in multiple mode
      /// click menu item twice mean cancel it
      if (values.has(id)) {
        values.delete(id);
        setValue([...values.values()].map((optionables) => optionables.map((optionable) => optionable.value)));
        return;
      }

      /// add this selected value
      setValue(
        [...values.values()].map((optionables) => optionables.map((optionable) => optionable.value)).concat([_value])
      );
    },
    [readablePaths, mode, values, setValue, close]
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
  const [readableOptions, readablePaths] = useMemo(
    () =>
      readOptions({
        options,
      }),
    [options]
  );

  /// menus split into 2 parts
  /// 1. preseted menu items
  /// 2. dynamic menu items
  const presetedMenuItems = useMemo(() => {
    return [...readableOptions.values()].map((option) => toMenuItem(option));
  }, [readableOptions]);

  const [additionalMenusItems, setAdditionalMenusItems] = useState<MenuItemProps[][]>([]);

  /// click parent menu item, render more menu
  const onClick = () => {};

  return {
    presetedMenuItems,
    additionalMenusItems,
    readableOptions,
    readablePaths,
    onClick,
    setAdditionalMenusItems,
  };
};
