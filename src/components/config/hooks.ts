import { useContext } from "react";
import Context from "./context";
import { ComponentToken } from "../../utils/class-name";

/**
 * @description
 * the component class names
 */
export const useClassNames = <T extends ComponentToken>(token: T) => {
  return useContext(Context).classNames[token];
};

/**
 * @description
 * configuration
 */
export const useConfiguration = () => {
  return useContext(Context);
};
