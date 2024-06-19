import { type ColumnDef, createColumnHelper, CellContext } from "@tanstack/react-table";
import { useMemo, useRef, createElement } from "react";
import type { Column, ContextValue, SortDescriptor } from "./types";
import HeaderCell from "./header/cell";
import { useControlledState, useEvent } from "@aiszlab/relax";

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
        header: createElement(HeaderCell, { children: title, sortable, value: key }),
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
  sortDescriptor: _sortDescriptor,
  onSortChange: _onSortChange,
}: {
  table: ContextValue<T>["table"];
  bordered: boolean;
  sortDescriptor?: SortDescriptor;
  onSortChange?: (sortDescriptor: SortDescriptor) => void;
}) => {
  const [sortDescriptor, setSortDescriptor] = useControlledState(_sortDescriptor);

  // sort change handler
  const onSortChange = useEvent((sortDescriptor: SortDescriptor) => {
    setSortDescriptor(sortDescriptor);
    _onSortChange?.(sortDescriptor);
  });

  return useMemo<ContextValue<unknown>>(
    () => ({
      // @ts-ignore
      table: _table,
      bordered,

      // sort descriptor
      sortDescriptor,
      onSortChange,
    }),
    [_table, bordered, sortDescriptor, onSortChange]
  );
};
