import { createContext } from "react";

/**
 * @description
 * class names
 */
export const CLASS_NAMES = {
  picker: "time-picker",
  input: "time-picker__input",
  panel: "time-picker__panel",
  panelFooter: "time-picker__panel-footer",
};

export const Context = createContext({
  classNames: CLASS_NAMES,
});
