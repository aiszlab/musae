import { createContext } from "react";

/**
 * @description
 * class names
 */
export const CLASS_NAMES = {
  breadcrumb: "breadcrumb",
  item: "breadcrumb__item",
  separator: "breadcrumb__separator",
};

export const Context = createContext({
  classNames: CLASS_NAMES,
});
