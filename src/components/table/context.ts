import { createContext, useContext } from "react";
import type { ContextValue } from "musae/types/table";

export const CLASS_NAMES = {
  table: "table",
  header: "table__header",
  body: "table__body",
} as const;

const Context = createContext<ContextValue<unknown> & { classNames: typeof CLASS_NAMES }>({
  bordered: false,
  classNames: CLASS_NAMES,
});

export { Context };

/**
 * @author murukal
 * @description
 * use table context hook
 */
export const useTable = <T>() => {
  return useContext(Context) as ContextValue<T> & { classNames: typeof CLASS_NAMES };
};
