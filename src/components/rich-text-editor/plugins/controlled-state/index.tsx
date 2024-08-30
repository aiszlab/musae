import { type ReactNode, useEffect } from "react";
import { isUndefined } from "@aiszlab/relax";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

interface Props {
  value?: string;
}

const ControlledStatePlugin = ({ value }: Props): ReactNode => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (isUndefined(value)) return;

    try {
      const editorState = editor.parseEditorState(value);
      editor.setEditorState(editorState);
    } catch (error) {
      console.error(error);
    }
  }, [value, editor]);

  return null;
};

export default ControlledStatePlugin;
