import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $createParagraphNode, $getSelection, $isRangeSelection } from "lexical";
import React, { useCallback, useMemo, useState } from "react";
import {
  IconChecklist,
  IconLooks5,
  IconLooks4,
  IconLooksOne,
  IconLooks6,
  IconLooks3,
  IconLooksTwo,
  IconNotes,
  IconCode,
} from "../../../icon/icons";
import { $setBlocksType } from "@lexical/selection";
import { $createHeadingNode, type HeadingTagType } from "@lexical/rich-text";
import { INSERT_CHECK_LIST_COMMAND } from "@lexical/list";
import { $createCodeNode } from "@lexical/code";
import type { DropdownProps } from "../../../../types/rich-text-editor";
import { useLocale } from "../../../../locale";
import { RequiredTo } from "@aiszlab/relax/types";

type BlockFormat = HeadingTagType | "paragraph" | "check" | "code";

/**
 * 判断是否为有效的`BlockFormat`
 */
export const isValidBlockFormat = (
  value: string,
  blockFormats: Map<string, unknown>,
): value is BlockFormat => {
  return !!blockFormats?.has(value);
};

/**
 * 文本对应的`BlockFormat`
 */
export const useBlockFormat = () => {
  const [editor] = useLexicalComposerContext();
  const [locale] = useLocale("rich-text-editor");

  const blockFormats = useMemo<RequiredTo<DropdownProps<BlockFormat>["items"]>>(
    () =>
      new Map([
        [
          "paragraph",
          {
            label: "Normal",
            prefix: <IconNotes />,
          },
        ],
        [
          "h1",
          {
            label: "Heading 1",
            prefix: <IconLooksOne />,
          },
        ],
        [
          "h2",
          {
            label: "Heading 2",
            prefix: <IconLooksTwo />,
          },
        ],
        [
          "h3",
          {
            label: "Heading 3",
            prefix: <IconLooks3 />,
          },
        ],
        [
          "h4",
          {
            label: "Heading 4",
            prefix: <IconLooks4 />,
          },
        ],
        [
          "h5",
          {
            label: "Heading 5",
            prefix: <IconLooks5 />,
          },
        ],
        [
          "h6",
          {
            label: "Heading 6",
            prefix: <IconLooks6 />,
          },
        ],
        [
          "check",
          {
            label: locale.checkList,
            prefix: <IconChecklist />,
          },
        ],
        [
          "code",
          {
            label: locale.codeBlock,
            prefix: <IconCode />,
          },
        ],
      ]),
    [locale],
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

    if (_blockFormat === "code") {
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

  const _setBlockFormat = useCallback(
    (value: string) => {
      setBlockFormat(isValidBlockFormat(value, blockFormats) ? value : "paragraph");
    },
    [blockFormats],
  );

  return {
    blockFormat,
    blockFormats,
    setBlockFormat: _setBlockFormat,
    formatBlock,
  };
};
