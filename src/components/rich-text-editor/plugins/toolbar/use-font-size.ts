import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection } from "lexical";
import { useCallback, useMemo, useState } from "react";
import { $patchStyleText } from "@lexical/selection";
import type { DropdownProps } from "../../../../types/rich-text-editor";

const DEFAULT_FONT_SIZE = "15px";

/**
 * @description
 * font sizes
 */
export const useFontSize = () => {
  const [editor] = useLexicalComposerContext();
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);

  const fontSizes = useMemo<DropdownProps<string>["items"]>(() => {
    return new Map([
      ["12px", { label: "12px" }],
      ["13px", { label: "13px" }],
      ["14px", { label: "14px" }],
      [DEFAULT_FONT_SIZE, { label: DEFAULT_FONT_SIZE }],
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
