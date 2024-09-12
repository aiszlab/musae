import React, { type ReactNode } from "react";
import { isUndefined, useEvent, useUpdateEffect } from "@aiszlab/relax";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import type { EditorState, ElementNode, LexicalEditor } from "lexical";
import type { Use } from "../../types";
import { $convertToMarkdownString } from "@lexical/markdown";
import { TRANSFORMERS } from "../markdown-shortcut";

interface Props {
  value?: string;
  onChange?: (value: string) => void;
  use: Use;
}

const ControlledStatePlugin = ({ value, use: _use, onChange }: Props): ReactNode => {
  const [editor] = useLexicalComposerContext();

  useUpdateEffect(() => {
    if (isUndefined(value)) return;

    try {
      const editorState = editor.parseEditorState(value);
      editor.setEditorState(editorState);
    } catch (error) {
      console.error(error);
    }
  }, [value, editor]);

  const change = useEvent((state: EditorState, editor: LexicalEditor) => {
    const _value = JSON.stringify(state.toJSON());
    onChange?.(_value);

    editor.read(() => {
      const _value = JSON.stringify(state.toJSON());
      if (_use === "serialized") {
        onChange?.(_value);
        return;
      }

      const markdown = $convertToMarkdownString(
        TRANSFORMERS,
        state._nodeMap.get("root") as ElementNode,
      );
      onChange?.(markdown);
    });
  });

  return <OnChangePlugin onChange={change} />;
};

export default ControlledStatePlugin;
