import { type Key, useMemo, useCallback } from "react";
import type { ReadableOptions, SelectProps, ToMenuItem } from "./types";
import { useControlledState } from "@aiszlab/relax";
import { readOptions, toKey, toOption, toValues } from "./utils";

/**
 * @description
 * use value
 */
export const useValue = ([valueInProps, readableOptions, mode, close]: [
  value: SelectProps["value"],
  readableOptions: ReadableOptions,
  mode: SelectProps["mode"],
  close: VoidFunction
]) => {
  const [_value, setValue] = useControlledState(valueInProps);

  /// convert prop value into a map
  /// in this component, only use map for controlled state
  const values = useMemo<Map<Key, string>>(
    () =>
      toValues(_value).reduce((prev, _value) => {
        const key = toKey(_value);
        return prev.set(key, readableOptions.get(key) ?? toOption(_value).label);
      }, new Map()),
    [_value, readableOptions]
  );

  const onChange = useCallback(
    (key: Key) => {
      // if this select is single mode, just use key value
      // close dropdown after click
      if (!mode) {
        close();
        setValue(key);
        return;
      }

      // in multiple mode
      // click menu item twice mean cancel it
      // else add current values
      const isRemoved = values.has(key) && values.delete(key);
      setValue([...values.keys(), ...(isRemoved ? [] : [key])]);
    },
    [mode, values, setValue, close]
  );

  return {
    value: values,
    onChange,
  };
};

/**
 * @description
 * options
 */
export const useOptions = ([options]: [options: SelectProps["options"]]) => {
  const toMenuItems = useCallback<ToMenuItem>((option) => {
    return {
      key: option.value,
      label: option.label,
    };
  }, []);

  return useMemo(() => {
    const [menuItems, readableOptions] = readOptions(options || [], toMenuItems);
    return {
      menuItems,
      readableOptions,
    };
  }, [options, toMenuItems]);
};
