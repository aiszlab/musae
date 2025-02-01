import { INSERT_CHECK_LIST_COMMAND, insertList } from "@lexical/list";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getNodeByKey, COMMAND_PRIORITY_LOW } from "lexical";
import { chain, useMounted } from "@aiszlab/relax";
import { CheckableListItemNode } from "../../nodes/checkable-list-item";
import { CheckboxNode } from "../../nodes/checkbox";

const CheckListPlugin = () => {
  const [editor] = useLexicalComposerContext();

  useMounted(() => {
    const unregister = chain(
      // register command
      editor.registerCommand(
        INSERT_CHECK_LIST_COMMAND,
        () => {
          insertList(editor, "check");
          return true;
        },
        COMMAND_PRIORITY_LOW,
      ),

      // listen check list item mutation
      editor.registerMutationListener(CheckableListItemNode, (mutatedNodes) => {
        for (const { 0: nodeKey, "1": mutation } of mutatedNodes) {
          if (mutation === "created") {
            editor.update(() => {
              const listItem = $getNodeByKey<CheckableListItemNode>(nodeKey);
              if (!listItem) return;

              listItem.append(new CheckboxNode());
            });
            continue;
          }
        }
      }),
    );

    return () => {
      unregister();
    };
  });

  return null;
};

export default CheckListPlugin;
