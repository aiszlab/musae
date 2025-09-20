import {
  $getNodeByKey,
  DecoratorNode,
  type SerializedLexicalNode,
  type LexicalEditor,
  type NodeKey,
} from "lexical";
import React, { type ReactNode, type ChangeEvent } from "react";
import { Checkbox } from "../../checkbox";
import { create as $create, props as $props } from "@stylexjs/stylex";
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

type SerializedCheckboxNode = Omit<SerializedLexicalNode, "$"> & {
  $: {
    __checked: boolean;
  };
};

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
    const styled = $props(styles.checkbox);
    const dom = document.createElement("span");
    dom.className = styled.className ?? "";
    return dom;
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

  exportJSON(): SerializedCheckboxNode {
    const _serializedLexicalNode = super.exportJSON();

    return {
      ...super.exportJSON(),
      $: {
        ..._serializedLexicalNode.$,
        __checked: this.#checked,
      },
    };
  }

  static importJSON(_serializedNode: SerializedCheckboxNode) {
    return new CheckboxNode(void 0, _serializedNode.$.__checked);
  }
}

export { CheckboxNode };
