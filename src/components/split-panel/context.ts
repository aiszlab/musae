import { createContext } from "react";

/**
 * @description class names
 */
export const CLASS_NAMES = {
  splitPanel: "split-panel",
  panel: "split-panel__panel",
  divider: "split-panel__divider",
  dragger: "split-panel__divider-dragger",
};

/**
 * @description context
 */
const Context = createContext<{ classNames: typeof CLASS_NAMES } & { count: number }>({
  classNames: CLASS_NAMES,
  count: 0,
});

export default Context;
