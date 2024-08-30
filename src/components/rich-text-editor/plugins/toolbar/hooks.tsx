import { TOGGLE_LINK_COMMAND } from "@lexical/link";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
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
import { $patchStyleText, $setBlocksType } from "@lexical/selection";
import { $createHeadingNode, type HeadingTagType } from "@lexical/rich-text";
import { INSERT_CHECK_LIST_COMMAND } from "@lexical/list";
import { $createCodeNode } from "@lexical/code";
import { DropdownProps } from "../../types";

type BlockFormat = HeadingTagType | "paragraph" | "check" | "code-block";

const DEFAULT_FONT_SIZE = "15px";

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

  const blockFormats = useMemo<DropdownProps<BlockFormat>["items"]>(
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
        [
          "code-block",
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
        editor.dispatchCommand(INSERT_CHECK_LIST_COMMAND, void 0);
        return;
      }
      formatParagraph();
      return;
    }

    if (_blockFormat === "code-block") {
      editor.update(() => {
        const selection = $getSelection();
        if (!selection) return;

        if (selection.isCollapsed()) {
          $setBlocksType(selection, () => $createCodeNode());
          return;
        }

        const textContent = selection.getTextContent();
        const codeNode = $createCodeNode();
        selection.insertNodes([codeNode]);
        const _selection = $getSelection();
        if ($isRangeSelection(_selection)) {
          _selection.insertRawText(textContent);
        }
      });
      return;
    }

    editor.update(() => {
      const selection = $getSelection();
      $setBlocksType(selection, () => $createHeadingNode(_blockFormat));
    });
  };

  const _setBlockFormat = useCallback((value: string) => {
    setBlockFormat(value as BlockFormat);
  }, []);

  return {
    blockFormat,
    blockFormats,
    setBlockFormat: _setBlockFormat,
    formatBlock,
  };
};

/**
 * @description
 * font sizes
 */
export const useFontSizes = () => {
  const [editor] = useLexicalComposerContext();
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);

  const fontSizes = useMemo<DropdownProps<string>["items"]>(() => {
    return new Map([
      ["12px", { label: "12px" }],
      ["13px", { label: "13px" }],
      ["14px", { label: "14px" }],
      ["15px", { label: "15px" }],
      ["16px", { label: "16px" }],
      ["19px", { label: "19px" }],
      ["22px", { label: "22px" }],
      ["24px", { label: "24px" }],
      ["29px", { label: "29px" }],
      ["32px", { label: "32px" }],
      ["40px", { label: "40px" }],
      ["48px", { label: "48px" }],
    ]);
  }, []);

  const updateFontSize = useCallback(
    (value: string) => {
      editor.update(() => {
        if (!editor.isEditable()) return;
        const selection = $getSelection();
        if (!selection) return;

        $patchStyleText(selection, {
          "font-size": value,
        });
      });
    },
    [editor],
  );

  const _setFontSize = useCallback((value: string) => {
    setFontSize(value || DEFAULT_FONT_SIZE);
  }, []);

  return {
    fontSize,
    fontSizes,
    setFontSize: _setFontSize,
    updateFontSize,
  };
};

/**
 * @description
 * more font formats
 */
export const useFontFormats = () => {
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [fontFormated, setFontFormated] = useState("");

  const fontFormats = useMemo<DropdownProps<string>["items"]>(() => {
    return new Map();
  }, []);

  const _setFontFormated = useCallback((value: string) => {
  }, []);

  return {
    fontFormats,
  };
};
