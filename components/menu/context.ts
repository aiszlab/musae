import { createContext } from "react";
import { type ConfigContextValue, Order, type ContextValue } from "./types";

/**
 * @author murukal
 *
 * @description
 * menu context for all menu group or menu item
 */
const Context = createContext<ContextValue>({});

export default Context;

/**
 * @description
 * config context use for other components inject some props
 */
const ConfigContext = createContext<ConfigContextValue>({
  orders: [Order.Prefix, Order.Child, Order.Collapser],
});

export { ConfigContext };
