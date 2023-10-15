import { type Key, useContext, useMemo } from "react";
import Context from "../config/context";
import { withPrefix } from "../../utils/class-name";
import type { MenuItemProps } from "../menu/types";
import type { SelectProps } from "./types";
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
export const useOptions = ([options]: [options: SelectProps["options"]]) => {
  const [menuItems, valueWithLabel] = useMemo(() => {
    return (options || []).reduce<[MenuItemProps[], Map<Key, string>]>(
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
export const useChildren = ([options, value]: [options: SelectProps["options"], value: SelectProps["value"]]) => {
  /// resolve props options
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
