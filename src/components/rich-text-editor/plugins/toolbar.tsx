import React, { useCallback, useEffect, useState } from "react";
import { Redo, Undo, FormatBold } from "../../icon/icons";
import stylex from "@stylexjs/stylex";
import { spacing } from "../../theme/tokens.stylex";
import { Divider } from "../../divider";
import { Select } from "../../select";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_CRITICAL,
  FORMAT_TEXT_COMMAND,
  SELECTION_CHANGE_COMMAND,
} from "lexical";
import { useMounted } from "@aiszlab/relax";

const styles = stylex.create({
  default: {
    display: "flex",
    flexDirection: "row",
    gap: spacing.xxsmall,
  },
});

const Toolbar = () => {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState(false);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) return;

    setIsBold(selection.hasFormat("bold"));
  }, []);

  useMounted(() => {
    editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      () => {
        console.log("SELECTION_CHANGE_COMMAND");
        updateToolbar();
        return false;
      },
      COMMAND_PRIORITY_CRITICAL,
    );

    editor.getEditorState().read(() => {
      console.log("getEditorState");
      updateToolbar();
    });
  });

  const formatBold = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
  };

  const styled = stylex.props(styles.default);

  return (
    <div className={styled.className} style={styled.style}>
      <Undo />
      <Redo />
      <Divider orientation="vertical" />
      <Select />
      <Divider orientation="vertical" />
      <FormatBold onClick={formatBold} />
      {isBold && "bold"}
    </div>
  );
};

export default Toolbar;
