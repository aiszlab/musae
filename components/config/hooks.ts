import { useContext } from "react";
import Context from "./context";
import { ComponentToken } from "../../utils/class-name";

/**
 * @description
 * the component class names
 */
export const useClassNames = (token: ComponentToken) => {
  return useContext(Context).classNames[token];
};
