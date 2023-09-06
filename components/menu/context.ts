import { createContext } from "react";
import { type ContextValue } from "./types";

/**
 * @author murukal
 *
 * @description
 * menu context for all menu group or menu item
 */
const MenuContext = createContext<ContextValue | null>(null);

export default MenuContext;
