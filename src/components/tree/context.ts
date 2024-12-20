import { Key, createContext } from "react";
import { ContextValue } from "musae/types/tree";

/**
 * @description
 * class names
 */
const CLASS_NAMES = {
  tree: "tree",
  list: "tree__list",
  listHidden: "tree__list--hidden",
  holder: "tree__holder",
  node: "tree__node",
  title: "tree__node-title",
  expander: "tree__node-expander",
  checkbox: "tree__node-checkbox",
};

const Context = createContext<ContextValue & { classNames: typeof CLASS_NAMES }>({
  checkedKeys: new Set<Key>(),
  expandedKeys: new Set<Key>(),
  selectedKeys: new Set<Key>(),
  selectable: true,
  classNames: CLASS_NAMES,
});

export default Context;
export { CLASS_NAMES };
