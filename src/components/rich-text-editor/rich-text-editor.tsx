import React, { forwardRef, useImperativeHandle, useRef, type CSSProperties } from "react";
import { LexicalComposer, type InitialConfigType } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ClickableLinkPlugin } from "@lexical/react/LexicalClickableLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import CheckListPlugin from "./plugins/check-list";
import ControlledStatePlugin, {
  type Ref as ControlledStatePluginRef,
} from "./plugins/controlled-state";

import { clsx, useDefault, useIdentity } from "@aiszlab/relax";
import { useMessage } from "../message";
import stylex from "@stylexjs/stylex";

import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

/* nodes */
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { LinkNode } from "@lexical/link";
import { ListNode } from "@lexical/list";
import { HorizontalRuleNode } from "@lexical/react/LexicalHorizontalRuleNode";
import { CodeNode } from "@lexical/code";
import {
  CheckableListItemNode,
  replacement as listItemNodeReplacement,
} from "./nodes/checkable-list-item";

import ToolbarPlugin from "./plugins/toolbar";
import MarkdownShortcutPlugin, { TRANSFORMERS } from "./plugins/markdown-shortcut";
import { typography } from "../theme/theme";
import { styles as checkboxStyles } from "../checkbox";
import { $convertFromMarkdownString } from "@lexical/markdown";

import type {
  EditorThemeClasses,
  RichTextEditorRef,
  RichTextEditorProps,
} from "musae/types/rich-text-editor";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken } from "../../utils/component-token";
import { RichTextEditorClassToken } from "../../utils/class-name";

const styles = stylex.create({
  shell: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    backgroundColor: props.backgroundColor,
    borderRadius: sizes.xxxxsmall,
  }),

  variables: (props: {
    primaryColor: string;
    onPrimaryColor: string;
    outlineColor: string;
    codeBackgroundColor: string;
  }) => ({
    "--primary-color": props.primaryColor,
    "--on-primary-color": props.onPrimaryColor,
    "--outline-color": props.outlineColor,
    "--code-background-color": props.codeBackgroundColor,
  }),

  editor: {
    outline: "none",
    paddingInline: spacing.large,
    paddingBlock: spacing.medium,
    minHeight: sizes.xxxxxxlarge,
  },

  code: {
    backgroundColor: "var(--code-background-color)",
    padding: spacing.xxsmall,
    borderRadius: spacing.xxsmall,
    display: "block",
    overflow: "auto",
  },

  inlineCode: {
    padding: spacing.xxsmall,
    backgroundColor: "var(--code-background-color)",
    borderRadius: spacing.xxsmall,
  },

  link: {
    color: "var(--primary-color)",
    cursor: "text",
    textDecoration: {
      default: "none",
      ":hover": "underline",
    },
  },

  list: {},

  checkbox: {
    position: "absolute",
    insetInlineStart: spacing.xxsmall,
    insetBlockStart: spacing.xxsmall,
  },

  listItem: {
    outline: "none",
    position: "relative",
    paddingInline: spacing.xlarge,
  },

  listItemChecked: {
    textDecoration: "line-through",
  },
});

const RichTextEditor = forwardRef<RichTextEditorRef, RichTextEditorProps>(
  (
    { placeholder, disabled = false, defaultValue, onChange, value, className, style, ...props },
    ref,
  ) => {
    const [id] = useIdentity();
    const [messager, holder] = useMessage();
    const theme = useTheme();
    const _use = useDefault(() => props.use ?? "serialized");
    const controlledStatePluginRef = useRef<ControlledStatePluginRef>(null);
    const classNames = useClassNames(ComponentToken.RichTextEditor);

    const styled = {
      shell: stylex.props(
        !disabled && styles.shell({ backgroundColor: theme.colors[ColorToken.SurfaceContainer] }),
        styles.variables({
          primaryColor: theme.colors[ColorToken.Primary],
          onPrimaryColor: theme.colors[ColorToken.OnPrimary],
          outlineColor: theme.colors[ColorToken.Outline],
          codeBackgroundColor: theme.colors[ColorToken.SurfaceContainerHighest],
        }),
      ),
      editor: stylex.props(!disabled && styles.editor),
      h1: stylex.props(typography.display.large),
      h2: stylex.props(typography.display.medium),
      h3: stylex.props(typography.display.small),
      h4: stylex.props(typography.headline.large),
      h5: stylex.props(typography.headline.medium),
      h6: stylex.props(typography.headline.small),
      code: stylex.props(styles.code),
      inlineCode: stylex.props(styles.inlineCode),
      link: stylex.props(styles.link),
      listItem: {
        default: stylex.props(styles.listItem),
        checked: stylex.props(styles.listItemChecked),
      },
      checkbox: {
        unchecked: stylex.props(checkboxStyles.trigger.default, styles.checkbox),
        checked: stylex.props(
          checkboxStyles.trigger.default,
          checkboxStyles.trigger.checked,
          styles.checkbox,
        ),
      },
    };

    const initialConfig = useDefault<InitialConfigType>(() => {
      const theme: EditorThemeClasses = {
        heading: {
          h1: styled.h1.className,
          h2: styled.h2.className,
          h3: styled.h3.className,
          h4: styled.h4.className,
          h5: styled.h5.className,
          h6: styled.h6.className,
        },
        code: styled.code.className,
        text: {
          code: styled.inlineCode.className,
        },
        link: styled.link.className,
        list: {
          listitem: styled.listItem.default.className,
          listitemChecked: styled.listItem.checked.className,
        },
        checkList: {
          checkbox: {
            checked: styled.checkbox.checked.className,
            unchecked: styled.checkbox.unchecked.className,
          },
        },
      };

      return {
        namespace: id,
        onError: (error) => {
          messager.error({
            description: error.message,
          });
        },
        nodes: [
          HeadingNode,
          QuoteNode,
          CodeNode,
          LinkNode,
          ListNode,
          CheckableListItemNode,
          listItemNodeReplacement,
          HorizontalRuleNode,
        ],
        theme,
        editable: !disabled,
        editorState:
          defaultValue &&
          ((editor) => {
            // different value usage, use different serialization
            switch (_use) {
              case "markdown":
                $convertFromMarkdownString(defaultValue, TRANSFORMERS, void 0, true);
                break;
              default:
                editor.setEditorState(editor.parseEditorState(defaultValue));
                break;
            }
          }),
      };
    });

    useImperativeHandle(ref, () => {
      return {
        setValue: (_value) => {
          controlledStatePluginRef.current?.setValue(_value);
        },
      };
    });

    return (
      <LexicalComposer initialConfig={initialConfig}>
        <div
          className={clsx(
            classNames[RichTextEditorClassToken.RichTextEditor],
            className,
            styled.shell.className,
          )}
          style={{
            ...styled.shell.style,
            ...style,
          }}
        >
          {!disabled && <ToolbarPlugin />}

          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className={clsx(
                  classNames[RichTextEditorClassToken.Editable],
                  styled.editor.className,
                )}
                style={styled.editor.style}
                placeholder={placeholder ?? (() => null)}
                aria-placeholder={props["aria-placeholder"] ?? ""}
              />
            }
            ErrorBoundary={LexicalErrorBoundary}
          />

          <HistoryPlugin />

          <MarkdownShortcutPlugin />

          <LinkPlugin />
          <ClickableLinkPlugin disabled={!disabled} newTab />

          <ListPlugin />
          <CheckListPlugin />

          <ControlledStatePlugin ref={controlledStatePluginRef} use={_use} onChange={onChange} />

          {/* message holder */}
          {holder}
        </div>
      </LexicalComposer>
    );
  },
);

export default RichTextEditor;
