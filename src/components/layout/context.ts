import { createContext } from "react";

/**
 * @description class names
 */
export const CLASS_NAMES = {
  layout: "layout",
  heading: "layout__heading",
  header: "layout__header",
  sidebar: "layout__sidebar",
  main: "layout__main",
  footer: "layout__footer",
} as const;

/**
 * @description context
 */
const Context = createContext({
  classNames: CLASS_NAMES,
});

export default Context;
