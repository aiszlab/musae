import { useMemo } from "react";
import { type ConfigContextValue, Order } from "../menu";

/**
 * @description
 * menu config context value
 */
export const useMenuConfigContextValue = () => {
  return useMemo<ConfigContextValue>(() => {
    return {
      orders: [Order.Prefix, Order.Collapser, Order.Child],
    };
  }, []);
};
