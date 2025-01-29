import { $isListItemNode, INSERT_CHECK_LIST_COMMAND, insertList } from "@lexical/list";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getNearestNodeFromDOMNode, COMMAND_PRIORITY_LOW } from "lexical";
import { chain, useMounted, isHTMLInputElement, useEvent, useIdentity } from "@aiszlab/relax";
import React, { useState } from "react";
import { Checkbox } from "../../../checkbox";
import { Popper } from "../../../popper";
import { CheckableListItemNode } from "../../nodes/checkable-list-item";

const CheckListPlugin = () => {
  const [editor] = useLexicalComposerContext();
  const [checkableItems, setCheckableItems] = useState<HTMLElement[]>([]);
  const [, randomId] = useIdentity();

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
        }

        if (prevRootElement !== null) {
          prevRootElement.removeEventListener("click", onEditorClick);
        }
      }),

      // listen check list item mutation
      editor.registerMutationListener(
        CheckableListItemNode,
        (mutatedNodes, { updateTags, dirtyLeaves, prevEditorState }) => {
          // mutatedNodes is a Map where each key is the NodeKey, and the value is the state of mutation.
          for (let [nodeKey, mutation] of mutatedNodes) {
            console.log(nodeKey, mutation);
          }
        },
        { skipInitialization: false },
      ),
    );

    return () => {
      unregister();
    };
  });

  // every check list item is mounted, render floating checkbox
  const mount = useEvent((container: HTMLElement) => {
    container.id = randomId();
    setCheckableItems((prev) => [...prev, container]);
    return container.id;
  });

  return (
    <>
      {checkableItems.map((checkableItem) => {
        return (
          <Popper trigger={checkableItem} open placement="left" key={checkableItem.id}>
            <Checkbox />
          </Popper>
        );
      })}
    </>
  );
};

export default CheckListPlugin;
