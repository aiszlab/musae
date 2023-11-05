import { type Key, useContext, useMemo, useCallback } from "react";
import Context from "../config/context";
import { withPrefix } from "../../utils/class-name";
import type { MenuItemProps } from "../menu/types";
import type { SelectProps } from "./types";
import { useControlledState } from "@aiszlab/relax";
import { toKey, toValues } from "./utils";
import { Partialable } from "../../types/lib";

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
    return (options || []).reduce<[MenuItemProps[], Map<Key, Partialable<string>>]>(
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
  valueWithLabel: Map<Key, Partialable<string>>,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value]
  );

  const [values, setValues] = useControlledState(_values);

  const onChange = useCallback(
    (key: Key) => {
      /// if this select is single mode
      /// use new map for controlled value
      /// close dropdown after click
      if (!mode) {
        close();
        setValues(new Map([[key, valueWithLabel.get(key)!]]));
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
      setValues(new Map(values.set(key, valueWithLabel.get(key)!).entries()));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [values, valueWithLabel, close]
  );

  return {
    value: values,
    onChange,
  };
};
