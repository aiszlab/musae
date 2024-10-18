import { useContext } from "react";
import Context from "../components/config/context";
import type { ClassNames } from "../types/config";

/**
 * @description
 * the component class names
 */
export const useClassNames = <T extends keyof ClassNames>(token: T) => {
  return useContext(Context).classNames[token];
};
