import { useContext } from "react";
import { Context } from "../context";

/**
 * @description
 * use tab context
 */
export const useTabsContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("useTabsContext must be used within a Tabs component");
  }

  return context;
};
