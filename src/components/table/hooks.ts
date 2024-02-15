import { createColumnHelper } from "@tanstack/react-table";
import { useContext, useMemo, useRef } from "react";
import { ContextValue, TableProps } from "./types";
import Context from "./context";

/**
 * @description
 * use columns
 */
export const useColumns = <T>([columns]: [TableProps<T>["columns"]]) => {
  const { current: helper } = useRef(createColumnHelper<T>());
  return columns ? columns(helper) : [];
};

/**
 * @author murukal
 * @description
 * use table context hook
 */
export const useTable = <T>() => {
  return useContext(Context) as ContextValue<T>;
};

/**
 * @author murukal
 * @description
 * for context value
 */
export const useContextValue = <T>({
  table: _table,
  bordered,
}: {
  table: ContextValue<T>["table"];
  bordered: boolean;
}) => {
  return useMemo<ContextValue<unknown>>(
    () => ({
      table: _table as ContextValue<unknown>["table"],
      bordered,
    }),
    [_table, bordered]
  );
};
