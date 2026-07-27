import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND } from "lexical";
import React, { useCallback, useMemo, useState } from "react";
import type { DropdownProps } from "../../../../types/rich-text-editor";
import { IconFormatStrikethrough, IconSubscript, IconSuperscript } from "../../../icon/icons";

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
          prefix: <IconFormatStrikethrough />,
        },
      ],
      [
        "subscript",
        {
          label: "subscript",
          prefix: <IconSubscript />,
        },
      ],
      [
        "superscript",
        {
          label: "superscript",
          prefix: <IconSuperscript />,
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
