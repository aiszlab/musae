import React, { CSSProperties, useCallback, useState } from "react";
import { Redo, Undo, FormatBold } from "../../../icon/icons";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../../../theme/tokens.stylex";
import { Divider } from "../../../divider";
import { Select } from "../../../select";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $isRangeSelection,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  FORMAT_TEXT_COMMAND,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  UNDO_COMMAND,
} from "lexical";
import { chain, useMounted } from "@aiszlab/relax";
import { Button } from "../../../button";
import { useTheme } from "../../../theme";
import { ColorToken } from "../../../../utils/colors";

const styles = stylex.create({
  default: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
    height: sizes.medium,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    gap: spacing.xxsmall,
    borderBottomWidth: sizes.smallest,
    borderBottomColor: props.outlineColor,
    borderBottomStyle: "solid",
  }),
});

const Toolbar = () => {
  const theme = useTheme();
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState(false);
  const [isUndoable, setIsUndoable] = useState(false);
  const [isRedoable, setIsRedoable] = useState(false);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) return;

    setIsBold(selection.hasFormat("bold"));
  }, []);

  useMounted(() => {
    const unregister = chain(
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateToolbar();
          return false;
        },
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (canUndo) => {
          setIsUndoable(canUndo);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (canRedo) => {
          setIsRedoable(canRedo);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      }),
    );

    return () => {
      unregister();
    };
  });

  const bold = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
  };

  const redo = () => {
    editor.dispatchCommand(REDO_COMMAND, void 0);
  };
  const undo = () => {
    editor.dispatchCommand(UNDO_COMMAND, void 0);
  };

  const styled = stylex.props(
    styles.default({ outlineColor: theme.colors[ColorToken.OutlineVariant] }),
  );

  return (
    <div className={styled.className} style={styled.style}>
      <Button variant="text" shape="rounded" size="small" onClick={undo} disabled={!isUndoable}>
        <Undo />
      </Button>

      <Button variant="text" shape="rounded" size="small" onClick={redo} disabled={!isRedoable}>
        <Redo />
      </Button>

      <Divider orientation="vertical" />
      <Select />
      <Divider orientation="vertical" />

      <Button variant={isBold ? "filled" : "text"} shape="rounded" size="small" onClick={bold}>
        <FormatBold />
      </Button>
    </div>
  );
};

export default Toolbar;
