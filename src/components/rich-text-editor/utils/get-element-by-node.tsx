import { type LexicalNode, type LexicalEditor } from "lexical";

export function getElementByNode(
  editor: LexicalEditor,
  node?: LexicalNode | null,
): HTMLElement | null {
  if (!node) return null;
  const key = node.getKey();
  return editor._keyToDOMMap.get(key) ?? null;
}
