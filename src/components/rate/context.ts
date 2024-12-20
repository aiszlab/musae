import { createContext } from "react";

/**
 * @description
 * class names
 */
const CLASS_NAMES = {
  rate: "rate",
  star: "rate__star",
  half: "rate__star-half",
  full: "rate__star-full",
};

const Context = createContext<{ classNames: typeof CLASS_NAMES }>({
  classNames: CLASS_NAMES,
});

export default Context;
export { CLASS_NAMES };
