import {
  $getNodeByKey,
  DecoratorNode,
  DOMExportOutput,
  type LexicalEditor,
  type NodeKey,
} from "lexical";
import React, { type ReactNode, type ChangeEvent } from "react";
import { Checkbox } from "../../checkbox";
import { $create, $attrs } from "../../../utils/styles";
import { sizes, spacing } from "../../theme/tokens.stylex";
import { CheckableListItemNode } from "./checkable-list-item";

const styles = $create({
  checkbox: {
    position: "absolute",
    insetInlineStart: sizes.none,
    insetBlockStart: sizes.none,
    display: "flex",
    padding: spacing.smallest,
  },
});

class CheckboxNode extends DecoratorNode<ReactNode> {
  #checked: boolean;

  static getType(): string {
    return "checkbox";
  }

  static clone(node: CheckboxNode): CheckboxNode {
    return new CheckboxNode(node.__key, node.#checked);
  }

  constructor(key?: NodeKey, checked?: boolean) {
    super(key);

    this.#checked = !!checked;
  }

  createDOM(): HTMLElement {
    const styled = $attrs(styles.checkbox);
    const dom = document.createElement("span");
    dom.className = styled.class ?? "";
    dom.style.cssText = styled.style ?? "";
    return dom;
  }

  exportDOM(_editor: LexicalEditor): DOMExportOutput {
    return {
      element: null,
    };
  }

  updateDOM(): false {
    return false;
  }

  decorate(editor: LexicalEditor): ReactNode {
    const change = (event: ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.target.checked;

      editor.update(() => {
        const _writable = this.getWritable();
        _writable.#checked = isChecked;

        if (!this.__parent) return;
        const parent = $getNodeByKey<CheckableListItemNode>(this.__parent);
        parent?.setChecked(isChecked);
      });
    };

    return <Checkbox ripple={false} defaultChecked={this.#checked} onChange={change} />;
  }

  isParentRequired() {
    return true;
  }
}

export { CheckboxNode };
