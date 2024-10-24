import { createContext } from "react";

/**
 * @description
 * class names
 */
export const CLASS_NAMES = {
  default: "rich-text-editor",
  loading: "rich-text-editor--loading",
  textarea: "rich-text-editor__textarea",
};

const Context = createContext({
  classNames: CLASS_NAMES,
});

export { Context };
