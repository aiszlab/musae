import React, { type CSSProperties, useState } from "react";
import {
  Redo,
  Undo,
  FormatBold,
  Code,
  FormatItalic,
  FormatUnderlined,
  InsertLink,
  FormatStrikethrough,
  Subscript,
  Superscript,
} from "../../../icon/icons";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../../../theme/tokens.stylex";
import { Divider } from "../../../divider";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $isRangeSelection,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  SELECTION_CHANGE_COMMAND,
} from "lexical";
import { chain, useEvent, useMounted } from "@aiszlab/relax";
import { Button } from "../../../button";
import { useTheme } from "../../../theme";
import { ColorToken } from "../../../../utils/colors";
import { useBlockFormats, useFontSizes, useHandlers } from "./hooks";
import { $isLinkNode, LinkNode } from "@lexical/link";
import Dropdown from "../../dropdown";
import { $isHeadingNode } from "@lexical/rich-text";
import { $isListNode, ListNode } from "@lexical/list";
import { $getNearestNodeOfType } from "@lexical/utils";
import FloatingLinkEditorPlugin from "../floating-link-editor";
import { $getSelectionStyleValueForProperty } from "@lexical/selection";

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

const ToolbarPlugin = () => {
  const theme = useTheme();
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isCode, setIsCode] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [isSubscript, setIsSubscript] = useState(false);
  const [isSuperscript, setIsSuperscript] = useState(false);

  const [linkNode, setLinkNode] = useState<LinkNode | null>(null);
  const isLink = !!linkNode;

  const [isUndoable, setIsUndoable] = useState(false);
  const [isRedoable, setIsRedoable] = useState(false);

  const { blockFormat, blockFormats, setBlockFormat, formatBlock } = useBlockFormats();
  const { fontSize, fontSizes, setFontSize, updateFontSize } = useFontSizes();

  const updateToolbar = useEvent(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) return;

    const _focusedNode = selection.focus.getNode();
    const _anchorNode = selection.anchor.getNode();
    const _rootNode = _anchorNode.getTopLevelElementOrThrow();
    const _focusedNodeParent = _focusedNode.getParent();

    setIsBold(selection.hasFormat("bold"));
    setIsCode(selection.hasFormat("code"));
    setIsItalic(selection.hasFormat("italic"));
    setIsUnderline(selection.hasFormat("underline"));
    setIsStrikethrough(selection.hasFormat("strikethrough"));
    setIsSubscript(selection.hasFormat("subscript"));
    setIsSuperscript(selection.hasFormat("superscript"));

    // font size
    setFontSize($getSelectionStyleValueForProperty(selection, "font-size"));

    // link node
    setLinkNode(
      $isLinkNode(_focusedNode)
        ? _focusedNode
        : $isLinkNode(_focusedNodeParent)
        ? _focusedNodeParent
        : null,
    );

    if ($isListNode(_rootNode)) {
      const parentList = $getNearestNodeOfType<ListNode>(_anchorNode, ListNode);
      const type = parentList ? parentList.getListType() : _rootNode.getListType();
      setBlockFormat(type);
    } else {
      const type = $isHeadingNode(_rootNode) ? _rootNode.getTag() : _rootNode.getType();
      setBlockFormat(type);
    }
  });

  const handlers = useHandlers({
    isLink,
  });

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

  const styled = stylex.props(
    styles.default({ outlineColor: theme.colors[ColorToken.OutlineVariant] }),
  );

  return (
    <>
      <div className={styled.className} style={styled.style}>
        <Button
          variant="text"
          shape="rounded"
          size="small"
          onClick={handlers.undo}
          disabled={!isUndoable}
        >
          <Undo />
        </Button>

        <Button
          variant="text"
          shape="rounded"
          size="small"
          onClick={handlers.redo}
          disabled={!isRedoable}
        >
          <Redo />
        </Button>

        <Divider orientation="vertical" />

        <Dropdown items={blockFormats} value={blockFormat} onChange={formatBlock} />

        <Divider orientation="vertical" />

        <Dropdown items={fontSizes} value={fontSize} onChange={updateFontSize} />

        <Divider orientation="vertical" />

        <Button
          variant={isBold ? "filled" : "text"}
          shape="rounded"
          size="small"
          onClick={handlers.bold}
        >
          <FormatBold />
        </Button>

        <Button
          variant={isItalic ? "filled" : "text"}
          shape="rounded"
          size="small"
          onClick={handlers.italic}
        >
          <FormatItalic />
        </Button>

        <Button
          variant={isUnderline ? "filled" : "text"}
          shape="rounded"
          size="small"
          onClick={handlers.italic}
        >
          <FormatUnderlined />
        </Button>

        <Button
          variant={isLink ? "filled" : "text"}
          shape="rounded"
          size="small"
          onClick={handlers.insertLink}
        >
          <InsertLink />
        </Button>

        <Button
          variant={isStrikethrough ? "filled" : "text"}
          shape="rounded"
          size="small"
          onClick={handlers.insertLink}
        >
          <FormatStrikethrough />
        </Button>

        <Button
          variant={isSubscript ? "filled" : "text"}
          shape="rounded"
          size="small"
          onClick={handlers.subscript}
        >
          <Subscript />
        </Button>

        <Button
          variant={isSuperscript ? "filled" : "text"}
          shape="rounded"
          size="small"
          onClick={handlers.superscript}
        >
          <Superscript />
        </Button>

        <Button
          variant={isCode ? "filled" : "text"}
          shape="rounded"
          size="small"
          onClick={handlers.code}
        >
          <Code />
        </Button>
      </div>

      <FloatingLinkEditorPlugin link={linkNode} />
    </>
  );
};

export default ToolbarPlugin;
