import { createContext } from "react";

/**
 * @description class names
 */
const CLASS_NAMES = {
  markdown: "markdown",
  loading: "markdown__loading",
} as const;

const Context = createContext<{ classNames: typeof CLASS_NAMES }>({
  classNames: CLASS_NAMES,
});

export default Context;
export { CLASS_NAMES };
