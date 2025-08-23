import React, { forwardRef, useImperativeHandle, type ReactNode } from "react";
import { useControlledState, useEvent } from "@aiszlab/relax";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import type { EditorState, LexicalEditor } from "lexical";
import type { Use } from "../../../../types/rich-text-editor";
import { $convertFromMarkdownString, $convertToMarkdownString } from "@lexical/markdown";
import { TRANSFORMERS } from "../markdown-shortcut";

interface Props {
  value?: string;
  onChange?: (value: string) => void;
  use: Use;
}

export type Ref = {
  setValue: (value: string) => void;
};

const ControlledStatePlugin = forwardRef<Ref, Props>(({ value, use, onChange }, ref): ReactNode => {
  const [editor] = useLexicalComposerContext();
  const [_value, _setValue] = useControlledState(value, {
    /**
     * @description
     * 监听受控值变化
     * 发生值变化时，更新内部状态和编辑器状态
     */
    onUpdate: (nextValue) => {
      _setEditorState(nextValue);
    },
  });

  /**
   * @description 根据数据，设置编辑器状态
   */
  const _setEditorState = useEvent((updatedValue) => {
    if (use === "markdown") {
      editor.update(() => {
        $convertFromMarkdownString(updatedValue);
      });
      return;
    }

    try {
      const editorState = editor.parseEditorState(updatedValue);
      editor.setEditorState(editorState);
    } catch (error) {
      console.error(error);
    }
  });

  /**
   * @description
   * 富文本组件发生数据变更时，同步更新受控数据
   */
  const change = useEvent((state: EditorState, editor: LexicalEditor) => {
    editor.read(() => {
      if (use === "serialized") {
        const changedValue = JSON.stringify(state.toJSON());
        onChange?.(changedValue);
        _setValue(changedValue);
        return;
      }

      const changedValue = $convertToMarkdownString(TRANSFORMERS, void 0, true);
      _setValue(changedValue);
      onChange?.(changedValue);
    });
  });

  useImperativeHandle(ref, () => {
    return {
      setValue: _setEditorState,
    };
  });

  return <OnChangePlugin onChange={change} />;
});

export default ControlledStatePlugin;
