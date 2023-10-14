import { useContext, useMemo } from "react";
import { MenuItemProps } from "../menu/types";
import type { SelectProps } from "./types";
import Context from "../config/context";
import { withPrefix } from "../../utils/class-name";

enum ClassName {
  Dropdown = "select-dropdown",
}

/**
 * @author murukal
 *
 * @description
 * options => menu items
 */
export const useMenuItems = <Value extends string | number>([options]: [options: SelectProps<Value>["options"]]) => {
  return [] as MenuItemProps[];
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
