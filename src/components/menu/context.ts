import { createContext } from "react";
import { type ContextValue } from "../../types/menu";

/**
 * @description
 * class names
 */
export const CLASS_NAMES = {
  menu: "menu",
  horizontal: "menu--horizontal",
  group: "menu__group",
  hidden: "menu__group--hidden",
  collapser: "menu__collapser",
  item: "menu__item",
} as const;

/**
 * @author murukal
 *
 * @description
 * menu context for all menu group or menu item
 */
export const Context = createContext<ContextValue & { classNames: typeof CLASS_NAMES }>({
  selectedKeys: new Set(),
  expandedKeys: new Set(),
  click: () => {},
  toggle: () => {},
  collect: () => {},
  size: "medium",
  classNames: CLASS_NAMES,
});
