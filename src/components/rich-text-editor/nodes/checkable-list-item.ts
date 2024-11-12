import { $isListNode, ListItemNode, SerializedListItemNode } from "@lexical/list";
import { LexicalNode, type EditorConfig, type LexicalNodeReplacement } from "lexical";
import type { EditorThemeClasses } from "musae/types/rich-text-editor";
import { Partialable } from "@aiszlab/relax/types";

class CheckableListItemNode extends ListItemNode {
  #disabled: boolean;
  #checkboxElement: HTMLInputElement | null = null;

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

  splice(start: number, deleteCount: number, nodesToInsert: Array<LexicalNode>): this {
    debugger;
    return super.splice(start, deleteCount, nodesToInsert);
  }

  toggleDisabled() {
    this.#disabled = !this.#disabled;
    this.#checkboxElement?.setAttribute("aria-disabled", String(this.#disabled));
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

    if (!this.#isCheckList) return listItem;

    this.#checkboxElement = document.createElement("input");
    const isChecked = this.getChecked();
    this.#checkboxElement.setAttribute("type", "checkbox");
    this.#checkboxElement.setAttribute("aria-disabled", String(this.#disabled));
    this.#checkboxElement.setAttribute("aria-checked", String(isChecked));
    this.#checkboxElement.className = (config.theme as EditorThemeClasses).checkbox ?? "";
    listItem.appendChild(this.#checkboxElement);
    return listItem;
  }

  updateDOM(prevNode: CheckableListItemNode, dom: HTMLElement, config: EditorConfig): boolean {
    const isReplace = super.updateDOM(prevNode, dom, config);
    this.#checkboxElement?.setAttribute("aria-checked", String(this.getChecked() ?? false));
    return isReplace;
  }

  get #isCheckList() {
    const parent = this.getParent();
    return $isListNode(parent) && parent.getListType() === "check";
  }
}

export const replacement = (disabled: boolean): LexicalNodeReplacement => ({
  replace: ListItemNode,
  with: (node: ListItemNode) =>
    new CheckableListItemNode(node.getValue(), node.getChecked(), undefined, disabled),
});

export { CheckableListItemNode };
