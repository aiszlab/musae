import { ListItemNode, SerializedListItemNode } from "@lexical/list";
import { type LexicalNodeReplacement } from "lexical";
import { Partialable } from "@aiszlab/relax/types";

class CheckableListItemNode extends ListItemNode {
  #disabled: boolean;
  #checkboxElement: HTMLDivElement | null = null;

  static getType(): string {
    return "checkable-list-item";
  }

  static clone(node: CheckableListItemNode) {
    return new CheckableListItemNode(node.__value, node.__checked, node.__key, node.disabled);
  }

  static importJSON(serializedNode: SerializedListItemNode) {
    return super.importJSON(serializedNode);
  }

  constructor(
    value: number,
    checked: Partialable<boolean>,
    key: Partialable<string>,
    disabled: boolean,
  ) {
    super(value, checked, key);

    this.#disabled = disabled;
  }

  get disabled() {
    return this.#disabled;
  }

  toggleDisabled() {
    const _node = this.getWritable();
    _node.#disabled = !_node.#disabled;
    _node.#checkboxElement?.setAttribute("aria-disabled", String(this.#disabled));
  }

  exportJSON(): SerializedListItemNode {
    return {
      ...super.exportJSON(),
      checked: this.getChecked(),
      type: this.getType(),
      value: this.getValue(),
      version: 1,
    };
  }
}

export const replacement = (disabled: boolean): LexicalNodeReplacement => ({
  replace: ListItemNode,
  with: (node: ListItemNode) =>
    new CheckableListItemNode(node.getValue(), node.getChecked(), void 0, disabled),
  withKlass: CheckableListItemNode,
});

export { CheckableListItemNode };
