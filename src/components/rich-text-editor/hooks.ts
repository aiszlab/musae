import { useClassNames as _useClassNames } from "../../hooks/use-class-names.component";

/**
 * @description
 * rich text editor class names
 */
export const useClassNames = () => {
  return _useClassNames({
    default: "rich-text-editor",
    loading: "rich-text-editor--loading",
    textarea: "rich-text-editor__textarea",
  });
};
