import { createContext } from "react";

/**
 * @description
 * class names
 */
export const CLASS_NAMES = {
  row: "grid__row",
  col: "grid__col",
};

export const Context = createContext({
  classNames: CLASS_NAMES,
});
