import { $isListNode, ListItemNode as _ListItemNode, SerializedListItemNode } from "@lexical/list";
import { addClassNamesToElement, removeClassNamesFromElement } from "@lexical/utils";
import { type EditorConfig, type LexicalNodeReplacement } from "lexical";
import type { EditorThemeClasses } from "../types";
import { isHTMLElement } from "@aiszlab/relax";

// toggle class names into checkbox element
const toggleCheckboxClassNames = (
  checkbox: HTMLElement | null,
  isChecked: boolean | undefined = false,
  theme: EditorThemeClasses,
) => {
  if (!checkbox) return;

  if (isChecked) {
    removeClassNamesFromElement(checkbox, theme.checkList?.checkbox?.unchecked);
    addClassNamesToElement(checkbox, theme.checkList?.checkbox?.checked);
  } else {
    removeClassNamesFromElement(checkbox, theme.checkList?.checkbox?.checked);
    addClassNamesToElement(checkbox, theme.checkList?.checkbox?.unchecked);
  }
};

class ListItemNode extends _ListItemNode {
  static getType(): string {
    return "checkable-list-item";
  }

  static clone(node: ListItemNode) {
    return new ListItemNode(node.__value, node.__checked, node.__key);
  }

  static importJSON(serializedNode: SerializedListItemNode): ListItemNode {
    return super.importJSON(serializedNode);
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
    toggleCheckboxClassNames(checkbox, isChecked, config.theme);

    listItem.appendChild(checkbox);
    return listItem;
  }

  updateDOM(prevNode: ListItemNode, dom: HTMLElement, config: EditorConfig): boolean {
    const isRerender = super.updateDOM(prevNode, dom, config);
    const checkbox = dom.firstElementChild;

    toggleCheckboxClassNames(
      isHTMLElement(checkbox) ? checkbox : null,
      this.getChecked(),
      config.theme,
    );

    return isRerender;
  }
}

export const replacement: LexicalNodeReplacement = {
  replace: _ListItemNode,
  with: (node: _ListItemNode) => new ListItemNode(node.getValue(), node.getChecked()),
};

export { ListItemNode };
