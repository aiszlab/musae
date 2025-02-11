import { createContext } from "react";
import { ContextValue } from "../../types/split-panel";

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
const Context = createContext<{ classNames: typeof CLASS_NAMES } & ContextValue>({
  classNames: CLASS_NAMES,
  orientation: "horizontal",
});

export default Context;
