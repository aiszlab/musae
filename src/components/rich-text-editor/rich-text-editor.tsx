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
import EditablePlugin from "./plugins/editable";

import { clsx, useDefault, useIdentity } from "@aiszlab/relax";
import { useMessage } from "../message";
import stylex from "@stylexjs/stylex";

import { opacity, sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";

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
import { CLASS_NAMES, Context } from "./context";
import { useClassNames } from "../../hooks/use-class-names.component";

const styles = stylex.create({
  shell: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    backgroundColor: props.backgroundColor,
    borderRadius: sizes.xxxxsmall,
  }),

  variables: (props: {
    primary: string;
    onPrimary: string;
    onSurface: string;
    surfaceContainerHighest: string;
    outline: string;
  }) => ({
    "--primary": props.primary,
    "--on-primary": props.onPrimary,
    "--on-surface": props.onSurface,
    "--surface-container-highest": props.surfaceContainerHighest,
    "--outline": props.outline,
  }),

  textarea: {
    outline: "none",
    paddingInline: spacing.large,
    paddingBlock: spacing.medium,
    minHeight: sizes.xxxxxxlarge,
  },

  code: {
    backgroundColor: "var(--surface-container-highest)",
    display: "block",
    overflow: "auto",
    borderRadius: spacing.xxsmall,
    paddingBlock: spacing.xsmall,
    paddingInline: spacing.xsmall,
    marginBlock: spacing.xxsmall,
  },

  inlineCode: {
    backgroundColor: "var(--surface-container-highest)",
    borderRadius: spacing.xxxsmall,
    paddingBlock: spacing.xxxsmall,
    paddingInline: spacing.xxxsmall,
    marginInline: spacing.xxxsmall,
  },

  link: {
    color: "var(--primary)",
    cursor: "pointer",
    textDecoration: {
      default: "none",
      ":hover": "underline",
    },
  },

  checkbox: {
    position: "absolute",
    insetInlineStart: spacing.xxxsmall,
    insetBlockStart: spacing.xxxxsmall,

    // if node is disabled, show disabled style
    ':not([aria-disabled="false"])': {
      opacity: opacity.thicker,
      cursor: "not-allowed",
    },
  },
});

const _styles = {
  list: {
    default: stylex.create({
      default: {
        padding: spacing.none,
        margin: spacing.none,
        listStylePosition: "outside",
      },
    }),

    unordered: stylex.create({
      default: {
        listStyleType: "disc",
      },

      checkable: {
        listStyleType: "none",
      },
    }),

    ordered: stylex.create({
      default: {
        listStyleType: "decimal",
      },
    }),

    item: stylex.create({
      default: {
        outline: "none",
        position: "relative",
        marginInline: spacing.xlarge,
      },

      checkable: {
        marginInline: spacing.none,
        paddingInline: spacing.xlarge,
      },

      checked: {
        textDecoration: "line-through",
      },
    }),
  },
};

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
    const classNames = useClassNames(CLASS_NAMES);

    const styled = {
      shell: stylex.props(
        !disabled && styles.shell({ backgroundColor: theme.colors["surface-container"] }),
        styles.variables({
          primary: theme.colors.primary,
          onPrimary: theme.colors["on-primary"],
          onSurface: theme.colors["on-surface"],
          surfaceContainerHighest: theme.colors["surface-container-highest"],
          outline: theme.colors.outline,
        }),
      ),
      textarea: stylex.props(!disabled && styles.textarea),
      h1: stylex.props(typography.display.large),
      h2: stylex.props(typography.display.medium),
      h3: stylex.props(typography.display.small),
      h4: stylex.props(typography.headline.large),
      h5: stylex.props(typography.headline.medium),
      h6: stylex.props(typography.headline.small),
      code: stylex.props(styles.code),
      inlineCode: stylex.props(styles.inlineCode),
      link: stylex.props(styles.link),

      checkbox: stylex.props(checkboxStyles.input.default, styles.checkbox),

      list: {
        unordered: stylex.props(_styles.list.default.default, _styles.list.unordered.default),
        ordered: stylex.props(_styles.list.default.default, _styles.list.ordered.default),
        checkable: stylex.props(_styles.list.unordered.checkable),
        item: {
          default: stylex.props(_styles.list.item.default, typography.body.medium),
          unchecked: stylex.props(_styles.list.item.checkable),
          checked: stylex.props(_styles.list.item.checkable, _styles.list.item.checked),
        },
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
          ul: styled.list.unordered.className,
          ol: styled.list.ordered.className,
          checklist: styled.list.checkable.className,
          listitem: styled.list.item.default.className,
          listitemUnchecked: styled.list.item.unchecked.className,
          listitemChecked: styled.list.item.checked.className,
        },
        checkbox: styled.checkbox.className,
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
          listItemNodeReplacement(disabled),
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
      <Context.Provider
        value={{
          classNames,
        }}
      >
        <LexicalComposer initialConfig={initialConfig}>
          <div
            className={clsx(classNames.default, className, styled.shell.className)}
            style={{
              ...styled.shell.style,
              ...style,
            }}
          >
            <MarkdownShortcutPlugin />

            {!disabled && <ToolbarPlugin />}

            <RichTextPlugin
              contentEditable={
                <ContentEditable
                  className={clsx(classNames.textarea, styled.textarea.className)}
                  style={styled.textarea.style}
                  placeholder={placeholder ?? (() => null)}
                  aria-placeholder={props["aria-placeholder"] ?? ""}
                />
              }
              ErrorBoundary={LexicalErrorBoundary}
            />

            <HistoryPlugin />

            <LinkPlugin />
            <ClickableLinkPlugin disabled={!disabled} newTab />

            <ListPlugin />
            <CheckListPlugin />

            <ControlledStatePlugin ref={controlledStatePluginRef} use={_use} onChange={onChange} />

            <EditablePlugin isEditable={!disabled} />

            {/* message holder */}
            {holder}
          </div>
        </LexicalComposer>
      </Context.Provider>
    );
  },
);

export default RichTextEditor;
