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

import { useDefault, useIdentity } from "@aiszlab/relax";
import { useMessage } from "../message";
import stylex from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";

import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";

import ToolbarPlugin from "./plugins/toolbar";
import MarkdownShortcutPlugin, { TRANSFORMERS } from "./plugins/markdown-shortcut";
import { typography } from "../theme/theme";
import { $convertFromMarkdownString } from "@lexical/markdown";

import type { RichTextEditorRef, RichTextEditorProps } from "../../types/rich-text-editor";
import { CLASS_NAMES, Context } from "./context";
import { useClassNames } from "../../hooks/use-class-names";
import { usingEditor } from "./utils";

const styles = stylex.create({
  editor: {
    backgroundColor: "var(--color-surface-container)",
    borderRadius: sizes.xxxxxxsmall,
  },

  disabled: {
    backgroundColor: null,
  },

  textarea: {
    outline: "none",
    paddingInline: spacing.large,
    paddingBlock: spacing.medium,
    minHeight: sizes.xxxxxxlarge,
  },
});

const RichTextEditor = forwardRef<RichTextEditorRef, RichTextEditorProps>(
  (
    {
      placeholder,
      disabled = false,
      defaultValue,
      onChange,
      value,
      className,
      style,
      use: _use = "serialized",
      ...props
    },
    ref,
  ) => {
    const [id] = useIdentity();
    const [messager, holder] = useMessage();
    const theme = useTheme();
    const controlledStatePluginRef = useRef<ControlledStatePluginRef>(null);
    const classNames = useClassNames(CLASS_NAMES);

    const styled = {
      editor: stylex.props(styles.editor, disabled && styles.disabled, typography.body.medium),
      textarea: stylex.props(!disabled && styles.textarea),
    };

    const initialConfig = useDefault<InitialConfigType>(() => {
      return {
        ...usingEditor({ disabled }),
        namespace: id,
        onError: (error) => {
          messager.error({
            description: error.message,
          });
        },
        ...(defaultValue && {
          editorState: (editor) => {
            // different value usage, use different serialization
            switch (_use) {
              case "markdown":
                $convertFromMarkdownString(defaultValue, TRANSFORMERS, void 0, true);
                break;
              default:
                editor.setEditorState(editor.parseEditorState(defaultValue));
                break;
            }
          },
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
            className={stringify(classNames.default, className, styled.editor.className)}
            style={{
              ...styled.editor.style,
              ...style,
              // @ts-expect-error
              "--color-primary": theme.colors.primary,
              "--color-on-primary": theme.colors["on-primary"],
              "--color-on-surface": theme.colors["on-surface"],
              "--color-surface-container": theme.colors["surface-container"],
              "--color-surface-container-highest": theme.colors["surface-container-highest"],
              "--color-outline": theme.colors.outline,
            }}
          >
            <MarkdownShortcutPlugin />

            {!disabled && <ToolbarPlugin />}

            <RichTextPlugin
              contentEditable={
                <ContentEditable
                  className={stringify(classNames.textarea, styled.textarea.className)}
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
