import { $isListNode, ListItemNode, SerializedListItemNode } from "@lexical/list";
import { type NodeKey, type LexicalNodeReplacement } from "lexical";
import type { Partialable } from "@aiszlab/relax/types";
import { CheckboxNode } from "./checkbox";

class CheckableListItemNode extends ListItemNode {
  #disabled: boolean;
  #checkbox?: NodeKey;

  constructor(
    value: number,
    checked: Partialable<boolean>,
    key: Partialable<string>,
    disabled: boolean,
    checkbox?: NodeKey,
  ) {
    super(value, checked, key);

    this.#disabled = disabled;
    this.#checkbox = checkbox;
  }

  static getType(): string {
    return "checkable-list-item";
  }

  static clone(node: CheckableListItemNode) {
    return new CheckableListItemNode(
      node.__value,
      node.__checked,
      node.__key,
      node.#disabled,
      node.#checkbox,
    );
  }

  static importJSON(serializedNode: SerializedListItemNode) {
    return super.importJSON(serializedNode);
  }

  exportJSON(): SerializedListItemNode {
    return {
      ...super.exportJSON(),
      checked: this.getChecked(),
      type: this.getType(),
      value: this.getValue(),
    };
  }

  /**
   * @description 渲染`checkbox`
   * 1. 组件应用在多种场景下，需要识别是不是在选择列表内
   * 2. 已经渲染`checkbox`后，无需重复渲染
   */
  renderCheckbox() {
    const parent = this.getParent();
    if (!$isListNode(parent) || parent.getListType() !== "check") return;

    const children = this.getChildren();
    const isRendered = children.some((child) => child instanceof CheckboxNode);
    if (isRendered) return;

    const checkboxNode = new CheckboxNode(void 0, this.__checked);
    this.#checkbox = checkboxNode.getKey();
    this.append(checkboxNode);
  }

  get disabled() {
    return this.#disabled;
  }

  get checkbox() {
    return this.#checkbox;
  }
}

export const replacement = (disabled: boolean): LexicalNodeReplacement => ({
  replace: ListItemNode,
  with: (node: ListItemNode) => {
    return new CheckableListItemNode(node.__value, node.__checked, void 0, disabled);
  },
  withKlass: CheckableListItemNode,
});

export { CheckableListItemNode };
