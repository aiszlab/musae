import { type Props as ContentEditableProps } from "@lexical/react/LexicalContentEditable";
import { type EditorThemeClasses as _EditorThemeClasses } from "lexical";
import type { MenuItem } from "musae/types/menu";
import type { HTMLAttributes, ReactNode } from "react";

export type Use = "markdown" | "serialized";

/**
 * @description
 * rich text editor props
 */
export type RichTextEditorProps = Pick<HTMLAttributes<HTMLDivElement>, "aria-placeholder"> & {
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
   * default value
   */
  defaultValue?: string;

  /**
   * @description
   * use value type
   * @default "serialized"
   */
  use?: Use;

  /**
   * @description
   * change handler
   */
  onChange?: (value: string) => void;

  /**
   * @description
   * value
   */
  value?: string;
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
  value: T | T[];
  onChange: (value: T) => void;
  children?: ReactNode;
};

/**
 * @description
 * editor ref
 */
export type RichTextEditorRef = {
  /**
   * value setter
   */
  setValue: (value: string) => void;
};
