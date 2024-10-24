import { createContext } from "react";

/**
 * @description
 * class names
 */
const CLASS_NAMES = {
  tour: "tour",
  overlay: "tour__overlay",
  spotlight: "tour__spotlight",
  title: "tour__title",
  description: "tour__description",
  footer: "tour__footer",
};

const Context = createContext({
  classNames: CLASS_NAMES,
});

export { Context, CLASS_NAMES };
