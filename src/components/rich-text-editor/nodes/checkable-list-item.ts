import { $isListNode, ListItemNode, SerializedListItemNode } from "@lexical/list";
import { type EditorConfig, type LexicalNodeReplacement } from "lexical";
import type { EditorThemeClasses } from "musae/types/rich-text-editor";
import { Partialable } from "@aiszlab/relax/types";

class CheckableListItemNode extends ListItemNode {
  #disabled: boolean;

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

  toggleDisabled(dom: HTMLElement) {
    this.#disabled = !this.#disabled;

    const checkbox = dom.firstElementChild;
    if (!checkbox) return;
    checkbox.setAttribute("aria-disabled", String(this.#disabled));
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

  createDOM(config: EditorConfig): HTMLElement {
    const listItem = super.createDOM(config);

    const parent = this.getParent();
    const isCheckList = $isListNode(parent) && parent.getListType() === "check";
    if (!isCheckList) return listItem;

    const isChecked = this.getChecked();
    const checkbox = document.createElement("input");

    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("aria-disabled", String(this.#disabled));
    checkbox.setAttribute("aria-checked", String(isChecked));
    checkbox.className = (config.theme as EditorThemeClasses).checkbox ?? "";

    listItem.appendChild(checkbox);
    return listItem;
  }

  updateDOM(prevNode: CheckableListItemNode, dom: HTMLElement, config: EditorConfig): boolean {
    super.updateDOM(prevNode, dom, config);
    const checkbox = dom.firstElementChild;

    if (checkbox) {
      checkbox.setAttribute("aria-disabled", String(this.#disabled));
      checkbox.setAttribute("aria-checked", String(this.getChecked() ?? false));
      checkbox.className = (config.theme as EditorThemeClasses).checkbox ?? "";
    }

    return true;
  }
}

export const replacement = (disabled: boolean): LexicalNodeReplacement => ({
  replace: ListItemNode,
  with: (node: ListItemNode) =>
    new CheckableListItemNode(node.getValue(), node.getChecked(), undefined, disabled),
});

export { CheckableListItemNode };
