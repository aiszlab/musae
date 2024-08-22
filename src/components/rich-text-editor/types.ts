import { type Props as ContentEditableProps } from "@lexical/react/LexicalContentEditable";

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
};
