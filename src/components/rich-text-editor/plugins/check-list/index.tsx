import { INSERT_CHECK_LIST_COMMAND, insertList } from "@lexical/list";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { COMMAND_PRIORITY_LOW } from "lexical";
import { chain, useMounted } from "@aiszlab/relax";
import React, { useState } from "react";
import { Checkbox } from "../../../checkbox";
import { Popper } from "../../../popper";
import { CheckableListItemNode } from "../../nodes/checkable-list-item";
import stylex from "@stylexjs/stylex";
import { spacing } from "../../../theme/tokens.stylex";

const styles = stylex.create({
  checkbox: {
    // override!
    ":not(#\\#)": {
      insetInlineStart: spacing.xxlarge,
    },
  },
});

const CheckListPlugin = () => {
  const [editor] = useLexicalComposerContext();
  const [checkableItems, setCheckableItems] = useState<Map<string, HTMLElement>>(new Map());

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
          if (mutation === "destroyed") {
            setCheckableItems((prev) => {
              prev.delete(nodeKey);
              return new Map(prev);
            });
            continue;
          }

          if (mutation === "created") {
            const element = editor.getElementByKey(nodeKey);
            if (!element) continue;
            setCheckableItems((prev) => new Map(prev.set(nodeKey, element)));
            continue;
          }
        }
      }),
    );

    return () => {
      unregister();
    };
  });

  return (
    <>
      {Array.from(checkableItems.entries()).map(([nodeKey, checkableItem]) => {
        return (
          <Popper
            trigger={checkableItem}
            open
            placement="left"
            key={nodeKey}
            elevation={false}
            {...stylex.props(styles.checkbox)}
          >
            <Checkbox />
          </Popper>
        );
      })}
    </>
  );
};

export default CheckListPlugin;
