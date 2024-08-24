import { TOGGLE_LINK_COMMAND } from "@lexical/link";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND, REDO_COMMAND, UNDO_COMMAND } from "lexical";
import React, { useMemo } from "react";
import { type MenuItem } from "../../../menu";
import {
  LooksFive,
  LooksFour,
  LooksOne,
  LooksSix,
  LooksThree,
  LooksTwo,
} from "../../../icon/icons";

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

  const strikethrough = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
  };

  const subscript = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, "subscript");
  };

  const superscript = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, "superscript");
  };

  return {
    bold,
    redo,
    undo,
    code,
    italic,
    underline,
    insertLink,
    strikethrough,
    subscript,
    superscript,
  };
};

/**
 * @description
 * formats
 */
export const useFormats = () => {
  return useMemo<MenuItem[]>(() => {
    return [
      {
        key: "h1",
        label: "Heading 1",
        prefix: <LooksOne />,
      },
      {
        key: "h2",
        label: "Heading 2",
        prefix: <LooksTwo />,
      },
      {
        key: "h3",
        label: "Heading 3",
        prefix: <LooksThree />,
      },
      {
        key: "h4",
        label: "Heading 4",
        prefix: <LooksFour />,
      },
      {
        key: "h5",
        label: "Heading 5",
        prefix: <LooksFive />,
      },
      {
        key: "h6",
        label: "Heading 6",
        prefix: <LooksSix />,
      },
    ];
  }, []);
};
