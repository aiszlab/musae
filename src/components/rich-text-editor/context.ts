import { createContext } from "react";

/**
 * @description
 * class names
 */
export const CLASS_NAMES = {
  default: "rich-text-editor",
  textarea: "rich-text-editor__textarea",
  checkbox: "rich-text-editor__checkbox",
} as const;

export const FALLBACK_CLASS_NAMES = {
  loading: "rich-text-editor__loading",
};

const Context = createContext({
  classNames: CLASS_NAMES,
});

export { Context };
