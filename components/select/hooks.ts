import { type Key, useContext, useMemo, useCallback } from "react";
import Context from "../config/context";
import { withPrefix } from "../../utils/class-name";
import type { MenuItemProps } from "../menu/types";
import type { SelectProps } from "./types";
import { useControlledState } from "@aiszlab/relax";
import { toKey, toValues } from "./utils";

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
 * @author murukal
 *
 * @description
 * options
 */
export const useOptions = ([options]: [options: SelectProps["options"]]) => {
  const [menuItems, valueWithLabel] = useMemo(() => {
    return (options || []).reduce<[MenuItemProps[], Map<Key, string | undefined>]>(
      (prev, current) => {
        prev[0].push({
          key: current.value.toString(),
          label: current.label,
        });
        prev[1].set(current.value, current.label);
        return prev;
      },
      [[], new Map()]
    );
  }, [options]);

  return { menuItems, valueWithLabel };
};

/**
 * @description
 * use value
 */
export const useValue = ([value, mode, valueWithLabel, close]: [
  value: SelectProps["value"],
  mode: SelectProps["mode"],
  valueWithLabel: Map<Key, string | undefined>,
  close: VoidFunction
]) => {
  /// convert prop value into a map
  /// in this component, only use map for controlled state
  const _values = useMemo<Map<Key, string>>(
    () =>
      toValues(value).reduce((prev, _value) => {
        const key = toKey(_value);
        return prev.set(key, valueWithLabel.get(key));
      }, new Map()),
    [value]
  );

  const [values, setValues] = useControlledState(_values);

  const onChange = useCallback(
    (key: Key) => {
      close();

      /// if this select is single mode
      /// use new map for controlled value
      if (!mode) {
        return setValues(new Map([[key, valueWithLabel.get(key)!]]));
      }

      /// in multiple mode
      /// click menu item twice mean cancel it
      if (values.has(key)) {
        values.delete(key);
        return setValues(new Map(values.entries()));
      }

      /// add this selected value
      setValues(new Map(values.set(key, valueWithLabel.get(key)!).entries()));
    },
    [values, valueWithLabel, close]
  );

  return {
    value: values,
    onChange,
  };
};
