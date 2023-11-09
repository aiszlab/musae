import { useCallback, useMemo, useState } from "react";
import type { CascaderProps, Optionable, ReadableOptions, ReadablePaths, ReverseIds } from "./types";
import type { Partialable } from "../../types/lib";
import { useControlledState } from "@aiszlab/relax";
import { type MenuItemProps } from "../menu";
import { readOptions, toOptions, toValues } from "./utils";

/**
 * @description
 * cascader value
 */
export const useValue = ([valueInProps, readableOptions, readablePaths, reverseIds, mode, close]: [
  CascaderProps["value"],
  ReadableOptions,
  ReadablePaths,
  ReverseIds,
  CascaderProps["mode"],
  close: VoidFunction
]) => {
  const [_value, setValue] = useControlledState(valueInProps);

  /// convert value
  const values = useMemo(() => {
    return toValues(_value).reduce<Map<number, Optionable[]>>((prev, keysOrOptions) => {
      const [options] = toOptions(keysOrOptions, readableOptions);

      /// read item id for menu
      const [id] = options.reduce<[Partialable<number>, Partialable<ReverseIds>]>(
        ([_id, _reverseIds], option) => [_reverseIds?.get(option.value)?.id, _reverseIds?.get(option.value)?.children],
        [void 0, reverseIds]
      );

      /// set item
      return id ? prev.set(id, options) : prev;
    }, new Map());
  }, [_value, readableOptions, reverseIds]);

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
  const [readableOptions, readablePaths, reverseIds] = useMemo(
    () =>
      readOptions({
        options,
      }),
    [options]
  );

  const [menusItems] = useState<MenuItemProps[][]>(() => {
    return [
      [...readablePaths.entries()].map(([id, paths]) => {
        return {
          key: id,
          label: paths.toReversed().at(0)?.label,
        };
      }),
    ];
  });

  /// click parent menu item, render more menu
  const onClick = () => {};

  return {
    menusItems,
    onClick,
    readableOptions,
    readablePaths,
    reverseIds,
  };
};
