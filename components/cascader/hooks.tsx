import React, { useCallback, useMemo, useState } from "react";
import type { ContextValue } from "../select/types";
import type { CascaderProps } from "./types";
import { useControlledState } from "@aiszlab/relax";
import { Menu, MenuItemProps } from "../menu";
import { readOptions } from "./utils";

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
export const useValue = ([valueInProps]: [value: CascaderProps["value"]]) => {
  const [_value, setValue] = useControlledState(valueInProps);

  /// convert value into maps
  const values = useMemo(() => {}, [_value]);

  /// change handler
  const onChange = useCallback(() => {
    /// single mode
  }, []);

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

  /// click parent menu item, render more menu
  const onClick = () => {};

  return {
    menusItems,
    onClick,
  };
};
