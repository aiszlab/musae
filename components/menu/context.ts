import { createContext } from "react";
import { type ContextValue } from "./types";

/**
 * @author murukal
 *
 * @description
 * menu context for all menu group or menu item
 */
const Context = createContext<ContextValue>({});

export default Context;
