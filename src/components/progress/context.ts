import { createContext } from "react";

/**
 * @description
 * class names
 */
const CLASS_NAMES = {
  progress: "progress",
  segment: "progress__segment",
};

const Context = createContext({
  classNames: CLASS_NAMES,
});

export default Context;
export { CLASS_NAMES };
