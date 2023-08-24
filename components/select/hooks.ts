import { MenuItemProps } from "../menu/types";
import type { SelectProps } from "./types";

/**
 * @author murukal
 *
 * @description
 * options => menu items
 */
export const useMenuItems = <Value extends string | number>([options]: [options: SelectProps<Value>["options"]]) => {
  return [] as MenuItemProps[];
};
