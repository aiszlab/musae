import { useContext, useMemo } from "react";
import Context from "../config/context";
import { withPrefix } from "../../utils/class-name";
import { Empty } from "../empty";
import React from "react";
import { Menu } from "../menu";
import type { MenuItemProps } from "../menu/types";
import type { SelectProps, ValueOf } from "./types";
import { isVoid } from "@aiszlab/relax";

enum ClassName {
  Dropdown = "select-dropdown",
}

/**
 * @author murukal
 *
 * @description
 * options
 */
export const useOptions = <Value extends ValueOf>([options]: [options: SelectProps<Value>["options"]]) => {
  const [menuItems, valueWithLabel] = useMemo(() => {
    return (options || []).reduce<[MenuItemProps[], Map<ValueOf, string>]>(
      (prev, current) => {
        prev[0].push({
          key: current.value.toString(),
          label: current.label,
        });
        return prev;
      },
      [[], new Map()]
    );
  }, [options]);

  return { menuItems, valueWithLabel };
};

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
 * children
 */
export const useChildren = <Value extends ValueOf>([options, value]: [
  options: SelectProps<Value>["options"],
  value: SelectProps<Value>["value"]
]) => {
  /// resolve props options
  const [menuItems, valueWithLabel] = useMemo(() => {
    return (options || []).reduce<[MenuItemProps[], Map<ValueOf, string | undefined>]>(
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

  const selected = useMemo(() => {
    if (isVoid(value)) {
      return void 0;
    }
    if (typeof value === "object") {
      return value.label;
    }
    return valueWithLabel.get(value);
  }, [valueWithLabel, value]);

  return {
    menuItems,
    selected,
  };
};
