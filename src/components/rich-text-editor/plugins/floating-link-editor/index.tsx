import React, { useState } from "react";
import { Popper } from "../../../popper";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { chain, useEvent, useMounted } from "@aiszlab/relax";
import { $getSelection, $isLineBreakNode, $isRangeSelection } from "lexical";
import { getSelectedNode } from "../../utils/get-selected-node";
import { $findMatchingParent } from "@lexical/utils";
import { $isAutoLinkNode, $isLinkNode } from "@lexical/link";

const FloatingLinkEditor = () => {
  const [editor] = useLexicalComposerContext();
  const container = editor.getRootElement();
  const [isOpen, setIsOpen] = useState(false);
  const [isLink, setIsLink] = useState(false);

  console.log("container=====", container);

  const updateToolbar = useEvent(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) {
      return;
    }

    const focusedNode = getSelectedNode(selection);
    const focusedLinkNode = $findMatchingParent(focusedNode, $isLinkNode);
    const focusedAutoLinkNode = $findMatchingParent(focusedNode, $isAutoLinkNode);

    if (!focusedLinkNode && !focusedAutoLinkNode) {
      setIsLink(false);
      setIsOpen(false);
      return;
    }

    setIsLink(true);
    setIsOpen(true);
  });

  useMounted(() => {
    const unregister = chain(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          console.log("dsadsadsadsad");
          updateToolbar();
        });
      }),
    );

    return unregister;
  });

  return (
    <Popper open={isOpen}>
      <div>test editor</div>
    </Popper>
  );
};

export default FloatingLinkEditor;
