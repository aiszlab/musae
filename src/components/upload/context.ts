import type { ContextValue } from "../../types/upload";
import { createContext } from "react";

/**
 * @description
 * class names
 */
export const CLASS_NAMES = {
  upload: "upload",
  uploadedList: "upload__uploaded-list",
  uploadedItem: "upload__uploaded-item",
  uploadedPictureItem: "upload__uploaded-item--picture",
} as const;

export const Context = createContext<ContextValue & { classNames: typeof CLASS_NAMES }>({
  classNames: CLASS_NAMES,
});
