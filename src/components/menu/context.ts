import { createContext } from "react";
import { type ContextValue } from "musae/types/menu";

/**
 * @author murukal
 *
 * @description
 * menu context for all menu group or menu item
 */
const Context = createContext<ContextValue>({
  selectedKeys: new Set(),
  expandedKeys: new Set(),
  click: () => {},
  toggle: () => {},
  collect: () => {},
  size: "medium",
});

export default Context;
