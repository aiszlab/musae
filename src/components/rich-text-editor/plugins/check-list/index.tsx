import { INSERT_CHECK_LIST_COMMAND, $insertList } from "@lexical/list";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getNodeByKey, COMMAND_PRIORITY_LOW } from "lexical";
import { chain, useMounted } from "@aiszlab/relax";
import { CheckableListItemNode } from "../../nodes/checkable-list-item";

const CheckListPlugin = () => {
  const [editor] = useLexicalComposerContext();

  useMounted(() => {
    const unregister = chain(
      // register command
      editor.registerCommand(
        INSERT_CHECK_LIST_COMMAND,
        () => {
          $insertList("check");
          return true;
        },
        COMMAND_PRIORITY_LOW,
      ),

      // listen check list item mutation
      editor.registerMutationListener(
        CheckableListItemNode,
        (mutatedNodes, { prevEditorState }) => {
          for (const { 0: nodeKey, "1": mutation } of mutatedNodes) {
            switch (mutation) {
              case "created":
              case "updated":
                editor.update(() => {
                  const listItem = $getNodeByKey<CheckableListItemNode>(nodeKey);
                  listItem?.renderCheckbox();
                });

                break;
              case "destroyed":
                editor.update(() => {
                  const checkboxNodeKey = $getNodeByKey<CheckableListItemNode>(
                    nodeKey,
                    prevEditorState,
                  )?.checkbox;

                  if (!checkboxNodeKey) return;

                  $getNodeByKey(checkboxNodeKey)?.remove();
                });

                break;
              default:
                break;
            }
          }
        },
      ),
    );

    return () => {
      unregister();
    };
  });

  return null;
};

export default CheckListPlugin;
