import { useContext } from "react";
import Context from "./context";

/**
 * @description
 * configuration
 */
export const useConfiguration = () => {
  return useContext(Context);
};
