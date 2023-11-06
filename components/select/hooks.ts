import { type Key, useContext, useMemo, useCallback } from "react";
import Context from "../config/context";
import { withPrefix } from "../../utils/class-name";
import type { ReadableOptions, SelectProps, ToMenuItem } from "./types";
import { useControlledState } from "@aiszlab/relax";
import { readOptions, toKey, toOption, toValues } from "./utils";

enum ClassName {
  Dropdown = "select-dropdown",
}

/**
 * @description
 * class names
 */
export const useClassNames = () => {
  const { prefix } = useContext(Context);

  return useMemo(
    () => ({
      dropdown: withPrefix(prefix, ClassName.Dropdown),
    }),
    [prefix]
  );
};

/**
 * @description
 * use value
 */
export const useValue = ([value, readableOptions, mode, close]: [
  value: SelectProps["value"],
  readableOptions: ReadableOptions,
  mode: SelectProps["mode"],
  close: VoidFunction
]) => {
  /// convert prop value into a map
  /// in this component, only use map for controlled state
  const _values = useMemo<Map<Key, string>>(
    () =>
      toValues(value).reduce((prev, _value) => {
        const key = toKey(_value);
        return prev.set(key, readableOptions.get(key) ?? toOption(_value).value);
      }, new Map()),
    [value, readableOptions]
  );

  const [values, setValues] = useControlledState(_values);

  const onChange = useCallback(
    (key: Key) => {
      /// if this select is single mode
      /// use new map for controlled value
      /// close dropdown after click
      if (!mode) {
        close();
        setValues(new Map([[key, readableOptions.get(key)!]]));
        return;
      }

      /// in multiple mode
      /// click menu item twice mean cancel it
      if (values.has(key)) {
        values.delete(key);
        setValues(new Map(values.entries()));
        return;
      }

      /// add this selected value
      setValues(new Map(values.set(key, readableOptions.get(key)!).entries()));
    },
    [mode, values, setValues, readableOptions, close]
  );

  return {
    value: values,
    onChange,
  };
};

/**
 * @description
 * readable options
 */
export const useReadableOptions = ([options]: [options: SelectProps["options"]]) => {
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
