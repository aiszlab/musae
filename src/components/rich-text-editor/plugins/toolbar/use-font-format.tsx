import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND } from "lexical";
import React, { useCallback, useMemo, useState } from "react";
import type { DropdownProps } from "../../../../types/rich-text-editor";
import { FormatStrikethrough, Subscript, Superscript } from "../../../icon/icons";

export type FontFormat = "strikethrough" | "subscript" | "superscript";

/**
 * 字体样式`hook`
 */
export const useFontFormats = () => {
  const [fontFormat, setFontFormat] = useState<Set<FontFormat>>(new Set());
  const [editor] = useLexicalComposerContext();

  const formatFont = useCallback(
    (_fontFormat: FontFormat) => {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, _fontFormat);
    },
    [editor],
  );

  const fontFormats = useMemo<DropdownProps<FontFormat>["items"]>(() => {
    return new Map([
      [
        "strikethrough",
        {
          label: "strikethrough",
          prefix: <FormatStrikethrough />,
        },
      ],
      [
        "subscript",
        {
          label: "subscript",
          prefix: <Subscript />,
        },
      ],
      [
        "superscript",
        {
          label: "superscript",
          prefix: <Superscript />,
        },
      ],
    ]);
  }, []);

  return {
    fontFormat,
    fontFormats,
    setFontFormat,
    formatFont,
  };
};
