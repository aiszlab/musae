import { TOGGLE_LINK_COMMAND } from "@lexical/link";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $createParagraphNode,
  $getSelection,
  FORMAT_TEXT_COMMAND,
  REDO_COMMAND,
  UNDO_COMMAND,
} from "lexical";
import React, { useCallback, useMemo, useState } from "react";
import { type MenuItem } from "../../../menu";
import {
  Checklist,
  LooksFive,
  LooksFour,
  LooksOne,
  LooksSix,
  LooksThree,
  LooksTwo,
  Notes,
} from "../../../icon/icons";
import { $setBlocksType } from "@lexical/selection";
import { $createHeadingNode, type HeadingTagType } from "@lexical/rich-text";
import { INSERT_CHECK_LIST_COMMAND } from "@lexical/list";

type BlockFormat = HeadingTagType | "paragraph" | "check";

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
export const useBlockFormats = () => {
  const [editor] = useLexicalComposerContext();

  const blockFormats = useMemo<Map<BlockFormat, Omit<MenuItem, "key">>>(
    () =>
      new Map([
        [
          "paragraph",
          {
            label: "Normal",
            prefix: <Notes />,
          },
        ],
        [
          "h1",
          {
            label: "Heading 1",
            prefix: <LooksOne />,
          },
        ],
        [
          "h2",
          {
            label: "Heading 2",
            prefix: <LooksTwo />,
          },
        ],
        [
          "h3",
          {
            label: "Heading 3",
            prefix: <LooksThree />,
          },
        ],
        [
          "h4",
          {
            label: "Heading 4",
            prefix: <LooksFour />,
          },
        ],
        [
          "h5",
          {
            label: "Heading 5",
            prefix: <LooksFive />,
          },
        ],
        [
          "h6",
          {
            label: "Heading 6",
            prefix: <LooksSix />,
          },
        ],
        [
          "check",
          {
            label: "Check List",
            prefix: <Checklist />,
          },
        ],
      ]),
    [],
  );

  const [blockFormat, setBlockFormat] = useState<BlockFormat>("paragraph");

  const formatParagraph = useCallback(() => {
    editor.update(() => {
      const selection = $getSelection();
      $setBlocksType(selection, () => $createParagraphNode());
    });
  }, [editor]);

  const formatBlock = (_blockFormat: BlockFormat) => {
    if (_blockFormat === blockFormat) return;

    if (_blockFormat === "paragraph") {
      formatParagraph();
      return;
    }

    if (_blockFormat === "check") {
      if (blockFormat !== "check") {
        editor.dispatchCommand(INSERT_CHECK_LIST_COMMAND, undefined);
        return;
      }

      formatParagraph();
      return;
    }

    editor.update(() => {
      const selection = $getSelection();
      $setBlocksType(selection, () => $createHeadingNode(_blockFormat));
    });
  };

  return {
    blockFormat,
    blockFormats,
    change: useCallback((value: string) => {
      setBlockFormat(value as BlockFormat);
    }, []),
    formatBlock,
  };
};
