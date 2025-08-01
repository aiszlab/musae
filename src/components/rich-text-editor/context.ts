import { createContext } from "react";

/**
 * @description
 * class names
 */
export const CLASS_NAMES = {
  default: "rich-text-editor",
  textarea: "rich-text-editor__textarea",
  checkbox: "rich-text-editor__checkbox",
  toolbar: "rich-text-editor__toolbar",
} as const;

const Context = createContext({
  classNames: CLASS_NAMES,
});

export { Context };
