import React, { type CSSProperties, useState } from "react";
import {
  Redo,
  Undo,
  FormatBold,
  Code,
  FormatItalic,
  FormatUnderlined,
  InsertLink,
  FontDownload,
} from "../../../icon/icons";
import { create as $create, props as $props } from "@stylexjs/stylex";
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
import { useBlockFormats, useFontFormats, useFontSizes, useHandlers, FontFormat } from "./hooks";
import { $isLinkNode, LinkNode } from "@lexical/link";
import Dropdown from "../../dropdown";
import { $isHeadingNode } from "@lexical/rich-text";
import { $isListNode, ListNode } from "@lexical/list";
import { $getNearestNodeOfType } from "@lexical/utils";
import FloatingLinkEditorPlugin from "../floating-link-editor";
import { $getSelectionStyleValueForProperty } from "@lexical/selection";

const styles = $create({
  default: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
    minHeight: sizes.medium,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    gap: spacing.xxxxxsmall,
    borderBottomWidth: sizes.smallest,
    borderBottomColor: props.outlineColor,
    borderBottomStyle: "solid",
    overflow: "auto",

    paddingInline: spacing.xxxxxsmall,
  }),
});

const ToolbarPlugin = () => {
  const theme = useTheme();
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isCode, setIsCode] = useState(false);

  const [linkNode, setLinkNode] = useState<LinkNode | null>(null);
  const isLink = !!linkNode;

  const [isUndoable, setIsUndoable] = useState(false);
  const [isRedoable, setIsRedoable] = useState(false);

  const { blockFormat, blockFormats, setBlockFormat, formatBlock } = useBlockFormats();
  const { fontSize, fontSizes, setFontSize, updateFontSize } = useFontSizes();
  const { fontFormat, fontFormats, setFontFormat, formatFont } = useFontFormats();

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

    setFontFormat(() => {
      return new Set([
        ...(selection.hasFormat("strikethrough") ? (["strikethrough"] satisfies FontFormat[]) : []),
        ...(selection.hasFormat("subscript") ? (["subscript"] satisfies FontFormat[]) : []),
        ...(selection.hasFormat("superscript") ? (["superscript"] satisfies FontFormat[]) : []),
      ]);
    });

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
      // update toolbar listeners
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateToolbar();
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

  const styled = $props(styles.default({ outlineColor: theme.colors["outline-variant"] }));

  return (
    <>
      <div className={styled.className} style={styled.style}>
        <Button
          variant="text"
          shape="round"
          size="small"
          onClick={handlers.undo}
          disabled={!isUndoable}
        >
          <Undo />
        </Button>

        <Button
          variant="text"
          shape="round"
          size="small"
          onClick={handlers.redo}
          disabled={!isRedoable}
        >
          <Redo />
        </Button>

        <Divider orientation="vertical" />

        <Dropdown
          items={blockFormats}
          value={blockFormat}
          // @ts-expect-error type-safe value
          onChange={formatBlock}
          width={80}
        />

        <Divider orientation="vertical" />

        <Dropdown
          items={fontSizes}
          value={fontSize}
          // @ts-expect-error type-safe value
          onChange={updateFontSize}
          width={40}
        />

        <Divider orientation="vertical" />

        <Button
          variant={isBold ? "filled" : "text"}
          shape="round"
          size="small"
          onClick={handlers.bold}
        >
          <FormatBold />
        </Button>

        <Button
          variant={isItalic ? "filled" : "text"}
          shape="round"
          size="small"
          onClick={handlers.italic}
        >
          <FormatItalic />
        </Button>

        <Button
          variant={isUnderline ? "filled" : "text"}
          shape="round"
          size="small"
          onClick={handlers.underline}
        >
          <FormatUnderlined />
        </Button>

        <Button
          variant={isLink ? "filled" : "text"}
          shape="round"
          size="small"
          onClick={handlers.insertLink}
        >
          <InsertLink />
        </Button>

        <Button
          variant={isCode ? "filled" : "text"}
          shape="round"
          size="small"
          onClick={handlers.code}
        >
          <Code />
        </Button>

        <Dropdown
          items={fontFormats}
          value={Array.from(fontFormat)}
          // @ts-expect-error type-safe value
          onChange={formatFont}
        >
          <FontDownload />
        </Dropdown>
      </div>

      <FloatingLinkEditorPlugin link={linkNode} />
    </>
  );
};

export default ToolbarPlugin;
