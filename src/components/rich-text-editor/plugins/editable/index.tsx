import { useUpdateEffect } from "@aiszlab/relax";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { CheckableListItemNode } from "../../nodes/checkable-list-item";
import { $getNodeByKey } from "lexical";

interface Props {
  isEditable: boolean;
}

/**
 * @description
 * editable plugin
 */
const EditablePlugin = ({ isEditable }: Props) => {
  const [editor] = useLexicalComposerContext();

  useUpdateEffect(() => {
    editor.setEditable(isEditable);

    // editable state changed, change nodes status
    editor.update(() => {
      editor._keyToDOMMap.entries().forEach(([key, dom]) => {
        const node = $getNodeByKey(key);
        if (!(node instanceof CheckableListItemNode)) return;
        node.toggleDisabled(dom);
      });
    });
  }, [isEditable, editor]);

  return null;
};

export default EditablePlugin;
