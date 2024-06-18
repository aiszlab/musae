import { type ColumnDef, createColumnHelper, CellContext } from "@tanstack/react-table";
import { useMemo, useRef, createElement } from "react";
import type { Column, ContextValue } from "./types";
import HeaderCell from "./header/cell";

/**
 * @description
 * use columns
 */
export const useColumns = <T>({ columns }: { columns: Column<T>[] }) => {
  const helper = useRef(createColumnHelper<T>());

  return useMemo<ColumnDef<T, any>[]>(() => {
    return columns.map(({ key, render, title, sortable = false }) => {
      // @ts-ignore
      return helper.current.accessor(key, {
        header: createElement(HeaderCell, { children: title, sortable }),
        cell: (_context: CellContext<T, unknown>) => {
          const value = _context.getValue();
          if (!render) {
            return value;
          }
          return render(value, _context.row.original, _context.row.index);
        },
      });
    });
  }, [columns]);
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
