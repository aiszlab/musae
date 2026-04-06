import { useContext } from "react";
import { Context } from "../context";

/**
 * @description
 * use tab context
 */
export const useTabsContext = () => {
  return useContext(Context) ?? { items: [], activeKey: void 0 };
};
