import { type ContentEditableProps } from "@lexical/react/LexicalContentEditable";
import { type EditorThemeClasses as _EditorThemeClasses } from "lexical";
import type { MenuItem } from "./menu";
import type { HTMLAttributes, Key, ReactNode } from "react";
import type { ComponentProps } from "./element";

export type Use = "markdown" | "serialized";

/**
 * @description
 * rich text editor props
 */
export type RichTextEditorProps = Pick<HTMLAttributes<HTMLDivElement>, "aria-placeholder"> &
  ComponentProps & {
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
   * checkbox class names
   */
  checkbox?: string;
};

/**
 * @description
 * dropdown items
 */
export type DropdownProps = {
  items?: Map<Key, Omit<MenuItem, "key">>;
  value: Key | Key[];
  onChange: (value: Key) => void;
  children?: ReactNode;
  width?: number;
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
