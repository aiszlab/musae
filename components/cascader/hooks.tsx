import React, { useCallback, useMemo, useState } from "react";
import type { ContextValue } from "../select/types";
import type { CascaderProps, Optionable, ReadableOptions, ReverseIds } from "./types";
import type { Partialable } from "../../types/lib";
import { useControlledState } from "@aiszlab/relax";
import { Menu, MenuItemProps } from "../menu";
import { readOptions, toOptions, toValues } from "./utils";

/**
 * @description
 * context
 */
export const useSelectContextValue = () => {
  return useMemo<ContextValue>(() => {
    return {
      useSelector: () => {
        return {
          options: <Menu items={[]}></Menu>,
          value: new Map(),
        };
      },
    };
  }, []);
};

/**
 * @description
 * cascader value
 */
export const useValue = ([valueInProps, readableOptions, reverseIds]: [
  value: CascaderProps["value"],
  ReadableOptions,
  ReverseIds
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
  const onChange = useCallback(() => {
    /// single mode
    setValue([]);
  }, [setValue]);

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
  const [menusItems, setMenusItems] = useState<MenuItemProps[][]>([]);

  const readableOptions = useMemo(() => {
    return readOptions({
      options,
    });
  }, [options]);

  console.log("readableOptions=====", readableOptions);
  console.log("setMenusItems=======", setMenusItems);

  /// click parent menu item, render more menu
  const onClick = () => {};

  return {
    menusItems,
    onClick,
  };
};
