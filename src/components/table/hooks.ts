import {
  createColumnHelper,
  type ColumnDef,
  type CellContext,
  type DeepValue,
  type DeepKeys,
  type Table,
} from "@tanstack/react-table";
import { useMemo, useRef, createElement } from "react";
import type { Column, ContextValue, SortDescriptor } from "../../types/table";
import HeaderCell from "./header/cell";
import { useControlledState, useEvent } from "@aiszlab/relax";
import type { Partialable } from "@aiszlab/relax/types";
import type { CLASS_NAMES } from "./context";

/**
 * @description
 * use columns
 */
export const useColumns = <T>({ columns }: { columns: Column<T>[] }) => {
  const helper = useRef(createColumnHelper<T>());

  return useMemo<ColumnDef<T, DeepValue<T, DeepKeys<T>>>[]>(() => {
    return columns.map(
      ({
        key,
        render,
        title,
        sortable = false,
        sortDirections = ["ascending", "descending"],
        valueAt,
      }) => {
        // @ts-expect-error valueAt or key is always exist
        return helper.current.accessor(valueAt ?? key, {
          header: createElement(HeaderCell, {
            children: title,
            sortable,
            value: key,
            sortDirections,
          }),
          cell: (_context: CellContext<T, DeepValue<T, DeepKeys<T>>>) => {
            const value = _context.getValue();
            if (!render) {
              return value;
            }
            return render(value, _context.row.original, _context.row.index);
          },
        });
      },
    );
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
  classNames,
}: {
  table: ContextValue<T>["table"];
  bordered: boolean;
  sortDescriptor?: SortDescriptor;
  onSortChange?: (sortDescriptor: SortDescriptor) => void;
  classNames: typeof CLASS_NAMES;
}) => {
  const [sortDescriptor, setSortDescriptor] = useControlledState(_sortDescriptor);

  // sort change handler
  const onSortChange = useEvent((sortDescriptor: SortDescriptor) => {
    setSortDescriptor(sortDescriptor);
    _onSortChange?.(sortDescriptor);
  });

  return useMemo<ContextValue<unknown> & { classNames: typeof CLASS_NAMES }>(
    () => ({
      table: _table as Partialable<Table<unknown>>,
      bordered,

      // sort descriptor
      sortDescriptor,
      onSortChange,

      classNames,
    }),
    [_table, bordered, sortDescriptor, onSortChange, classNames],
  );
};
