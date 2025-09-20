import { TOGGLE_LINK_COMMAND } from "@lexical/link";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND, REDO_COMMAND, UNDO_COMMAND } from "lexical";

/**
 * @description
 * toolbar event handlers
 */
export const useHandlers = ({ isLink }: { isLink: boolean }) => {
  const [editor] = useLexicalComposerContext();

  const bold = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
  };

  const redo = () => {
    editor.dispatchCommand(REDO_COMMAND, void 0);
  };
  const undo = () => {
    editor.dispatchCommand(UNDO_COMMAND, void 0);
  };

  const code = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, "code");
  };

  const italic = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
  };

  const underline = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
  };

  const insertLink = () => {
    if (!isLink) {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, "https://");
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
  };

  return {
    bold,
    redo,
    undo,
    code,
    italic,
    underline,
    insertLink,
  };
};
