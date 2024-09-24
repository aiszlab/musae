import React, { forwardRef, useCallback, useImperativeHandle, type ReactNode } from "react";
import { isUndefined, useEvent, useUpdateEffect } from "@aiszlab/relax";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import type { EditorState, ElementNode, LexicalEditor } from "lexical";
import type { Use } from "musae/types/rich-text-editor";
import { $convertToMarkdownString } from "@lexical/markdown";
import { TRANSFORMERS } from "../markdown-shortcut";

interface Props {
  value?: string;
  onChange?: (value: string) => void;
  use: Use;
}

export type Ref = {
  setValue: (value: string) => void;
};

const ControlledStatePlugin = forwardRef<Ref, Props>(
  ({ value, use: _use, onChange }, ref): ReactNode => {
    const [editor] = useLexicalComposerContext();

    const setValue = useCallback(
      (_value: string) => {
        try {
          const editorState = editor.parseEditorState(_value);
          editor.setEditorState(editorState);
        } catch (error) {
          console.error(error);
        }
      },
      [editor],
    );

    useUpdateEffect(() => {
      if (isUndefined(value)) return;
      setValue(value);
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

    useImperativeHandle(ref, () => {
      return {
        setValue,
      };
    });

    return <OnChangePlugin onChange={change} />;
  },
);

export default ControlledStatePlugin;
