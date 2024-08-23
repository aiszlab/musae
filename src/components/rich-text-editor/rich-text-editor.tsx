import React, { type CSSProperties } from "react";
import { LexicalComposer, InitialConfigType } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { useDefault, useIdentity } from "@aiszlab/relax";
import { useMessage } from "../message";
import stylex from "@stylexjs/stylex";

import type { RichTextEditorProps } from "./types";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

/* nodes */
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { LinkNode } from "@lexical/link";
import { ListNode, ListItemNode } from "@lexical/list";
import { HorizontalRuleNode } from "@lexical/react/LexicalHorizontalRuleNode";
import { CodeNode } from "@lexical/code";
import { StyledCodeNode } from "./hooks";

import ToolbarPlugin from "./plugins/toolbar";
import MarkdownShortcutPlugin from "./plugins/markdown-shortcut";
import { typography } from "../theme/theme";

const styles = stylex.create({
  shell: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    backgroundColor: props.backgroundColor,
    borderRadius: sizes.xxxxsmall,

    // code var
    "--code-bg-color": props.backgroundColor,
  }),

  editor: {
    outline: "none",
    paddingInline: spacing.large,
    paddingBlockStart: spacing.small,
    paddingBlockEnd: spacing.small,
  },

  code: {
    backgroundColor: "var(--code-bg-color)",
  },
});

const RichTextEditor = ({ placeholder, disabled = false }: RichTextEditorProps) => {
  const [id] = useIdentity();
  const [messager, holder] = useMessage();
  const theme = useTheme();

  const styled = {
    shell: stylex.props(
      styles.shell({ backgroundColor: theme.colors[ColorToken.SurfaceContainer] }),
    ),
    editor: stylex.props(styles.editor),
    h1: stylex.props(typography.display.large),
    h2: stylex.props(typography.display.medium),
    h3: stylex.props(typography.display.small),
    h4: stylex.props(typography.headline.large),
    h5: stylex.props(typography.headline.medium),
    h6: stylex.props(typography.headline.small),
    code: stylex.props(styles.code({ bgColor: theme.colors[ColorToken.Primary] })),
  };

  console.log("styled=====", styled);

  const initialConfig = useDefault<InitialConfigType>(() => {
    return {
      namespace: id,
      onError: (error) => {
        // messager.error({
        //   description: error.message,
        // });
        throw error;
      },
      nodes: [
        HeadingNode,
        QuoteNode,
        StyledCodeNode,
        {
          replace: CodeNode,
          with: (node: CodeNode) => {
            return new StyledCodeNode(node.getLanguage()).style(styled.code);
          },
        },
        LinkNode,
        ListNode,
        ListItemNode,
        HorizontalRuleNode,
      ],
      theme: {
        heading: {
          h1: styled.h1.className,
          h2: styled.h2.className,
          h3: styled.h3.className,
          h4: styled.h4.className,
          h5: styled.h5.className,
          h6: styled.h6.className,
        },
      },
    };
  });

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className={styled.shell.className} style={styled.shell.style}>
        {!disabled && <ToolbarPlugin />}

        <RichTextPlugin
          contentEditable={
            <ContentEditable
              className={styled.editor.className}
              style={styled.editor.style}
              placeholder={placeholder ?? (() => null)}
              aria-placeholder="Enter text..."
            />
          }
          ErrorBoundary={LexicalErrorBoundary}
        />

        <HistoryPlugin />

        <MarkdownShortcutPlugin />

        {/* message holder */}
        {holder}
      </div>
    </LexicalComposer>
  );
};

export default RichTextEditor;
