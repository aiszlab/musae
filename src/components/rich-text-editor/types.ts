import { type Props as ContentEditableProps } from "@lexical/react/LexicalContentEditable";
import { type EditorThemeClasses as _EditorThemeClasses } from "lexical";
import type { MenuItem } from "../menu";
import type { ReactNode } from "react";

/**
 * @description
 * rich text editor props
 */
export type RichTextEditorProps = {
  /**
   * @description
   * placeholder
   */
  placeholder?: ContentEditableProps["placeholder"];

  /**
   * @description
   * disabled
   */
  disabled?: boolean;

  /**
   * @description
   * value
   */
  value?: string;

  /**
   * @description
   * change handler
   */
  onChange?: (value: string) => void;
};

/**
 * @description
 * inject custom class names into `EditorThemeClasses`
 */
export type EditorThemeClasses = _EditorThemeClasses & {
  /**
   * @description
   * check list class names
   */
  checkList?: {
    checkbox?: {
      checked?: string;
      unchecked?: string;
    };
  };
};

/**
 * @description
 * dropdown items
 */
export type DropdownProps<T> = {
  items?: Map<T, Omit<MenuItem, "key">>;
  value: T;
  onChange: (value: T) => void;
  children?: ReactNode;
};
