import { createContext } from "react";
import type { ContextValue } from "musae/types/collapse";

export const CLASS_NAMES = {
  collapse: "collapse",
  item: "collapse__item",
  itemActive: "collapse__item--active",
  header: "collapse__item-header",
  collapser: "collapse__header-collapser",
  panel: "collapse__item-panel",
  panelActive: "collapse__item-panel--active",
  content: "collapse__item-content",
};

/**
 * @description
 * `Collapse` Context
 */
export const Context = createContext<ContextValue & { classNames: typeof CLASS_NAMES }>({
  activeKeys: new Set(),
  toggle: () => {},
  classNames: CLASS_NAMES,
});
