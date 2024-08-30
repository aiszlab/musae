import { $isListItemNode, INSERT_CHECK_LIST_COMMAND, insertList } from "@lexical/list";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getNearestNodeFromDOMNode, COMMAND_PRIORITY_LOW } from "lexical";
import { chain, useMounted, isHTMLInputElement, useEvent } from "@aiszlab/relax";

const CheckListPlugin = () => {
  const [editor] = useLexicalComposerContext();

  const onEditorClick = useEvent((event: MouseEvent) => {
    if (!editor.isEditable()) return;

    const target = event.target;

    // skip when target is not checkbox
    if (!target) return;
    if (!isHTMLInputElement(target)) return;

    const isCheckbox = target.getAttribute("type") === "checkbox";
    if (!isCheckbox) return;

    editor.update(() => {
      const node = $getNearestNodeFromDOMNode(target);

      if (!$isListItemNode(node)) return;
      target.focus();
      node.toggleChecked();
    });
  });

  useMounted(() => {
    const unregister = chain(
      editor.registerCommand(
        INSERT_CHECK_LIST_COMMAND,
        () => {
          insertList(editor, "check");
          return true;
        },
        COMMAND_PRIORITY_LOW,
      ),

      editor.registerRootListener((rootElement, prevRootElement) => {
        if (rootElement !== null) {
          rootElement.addEventListener("click", onEditorClick);
          //   rootElement.addEventListener("pointerdown", handlePointerDown);
        }

        if (prevRootElement !== null) {
          prevRootElement.removeEventListener("click", onEditorClick);
          //   prevRootElement.removeEventListener("pointerdown", handlePointerDown);
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
