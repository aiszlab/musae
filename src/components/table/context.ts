import { createContext, useContext } from "react";
import type { ContextValue } from "musae/types/table";

const Context = createContext<ContextValue<unknown>>({
  bordered: false,
});

export default Context;

/**
 * @author murukal
 * @description
 * use table context hook
 */
export const useTable = <T>() => {
  return useContext(Context) as ContextValue<T>;
};
