import { createContext } from "react";
import { type ContextValue } from "./types";

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
  variant: "filled",
});

export default Context;
