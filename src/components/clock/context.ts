import { createContext } from "react";

/**
 * @description
 * class names
 */
export const CLASS_NAMES = {
  clock: "clock",
  column: "clock__column",
};

export const Context = createContext({
  classNames: CLASS_NAMES,
});
