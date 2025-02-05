import { createContext } from "react";
import type { ContextValue } from "../../types/tabs";

/**
 * @description
 * class names
 */
export const CLASS_NAMES = {
  tabs: "tabs",
  navigation: "tabs__navigation",
  navigator: "tabs__navigator",
  list: "tabs__tab-list",
  tab: "tabs__item",
  indicator: "tabs__indicator",
  panels: "tabs__panels",
  panel: "tabs__panel",
} as const;

export const Context = createContext<
  | ContextValue & {
      classNames: typeof CLASS_NAMES;
    }
>({
  items: [],
  classNames: CLASS_NAMES,
});
