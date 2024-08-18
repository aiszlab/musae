import { useContext } from "react";
import type { ComponentToken } from "../utils/component-token";
import Context from "../components/config/context";

/**
 * @description
 * the component class names
 */
export const useClassNames = <T extends ComponentToken = ComponentToken>(token: T) => {
  return useContext(Context).classNames[token];
};
