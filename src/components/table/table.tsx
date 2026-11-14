import styles from "./styles";
import {
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  getPaginationRowModel,
  type ExpandedState,
  type RowSelectionState,
} from "@tanstack/react-table";
import React, { useMemo, useState } from "react";
import type { Key } from "react";
import { useColumns, useContextValue } from "./hooks";
import type { TableProps } from "../../types/table";
import Header from "./header/header";
import { Context, CLASS_NAMES } from "./context";
import Body from "./body";
import { props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { useClassNames } from "../../hooks/use-class-names";
import { Loading } from "../loading";
import { get, isFunction, isUndefined, useControlledState } from "@aiszlab/relax";
import { Pagination } from "../pagination";
import { usePagination } from "./hooks/use-pagination.hook";

const Table = <T,>({
  bordered = false,
  dataSource = [],
  columns: _columns = [],
  sortDescriptor,
  onSortChange,
  className,
  style,
  loading = false,
  expandable = false,
  expandedKeys,
  defaultExpandedKeys = [],
  onExpandedKeysChange,
  rowKey,
  pagination: _pagination,
  rowSelection,
}: TableProps<T>) => {
  const classNames = useClassNames(CLASS_NAMES);
  const columns = useColumns<T>({
    columns: _columns,
    expandable,
    selectable: Boolean(rowSelection),
  });
  const [uncontrolledSelection, setUncontrolledSelection] = useState<RowSelectionState>(() =>
    Object.fromEntries(
      (rowSelection?.defaultSelectedRowKeys ?? []).map((key) => [String(key), true]),
    ),
  );
  const [uncontrolledExpanded, setUncontrolledExpanded] = useState<ExpandedState>(() =>
    Object.fromEntries(defaultExpandedKeys.map((key) => [String(key), true])),
  );

  const { pagination, isPaginationHidden, changeAt, changePageSize, paginationProps } =
    usePagination({
      pagination: _pagination,
    });

  const expanded = useMemo<ExpandedState>(
    () =>
      isUndefined(expandedKeys)
        ? uncontrolledExpanded
        : Object.fromEntries(expandedKeys.map((key) => [String(key), true])),
    [expandedKeys, uncontrolledExpanded],
  );

  const table = useReactTable({
    columns,
    data: dataSource,
    getCoreRowModel: getCoreRowModel(),
    state: {
      ...(rowSelection && {
        rowSelection: isUndefined(rowSelection.selectedRowKeys)
          ? uncontrolledSelection
          : Object.fromEntries(rowSelection.selectedRowKeys.map((key) => [String(key), true])),
      }),
      ...(expandable && { expanded }),
      ...(!isPaginationHidden && {
        pagination: {
          pageIndex: pagination.pageIndex - 1,
          pageSize: pagination.pageSize,
        },
      }),
    },
    ...(rowSelection && {
      enableRowSelection: true,
      onRowSelectionChange: (updater) => {
        const current = isUndefined(rowSelection.selectedRowKeys)
          ? uncontrolledSelection
          : Object.fromEntries(rowSelection.selectedRowKeys.map((key) => [String(key), true]));
        const next = isFunction(updater) ? updater(current) : updater;

        if (isUndefined(rowSelection.selectedRowKeys)) setUncontrolledSelection(next);

        const selectedRowIds = Object.keys(next);
        const rowsById = table.getCoreRowModel().rowsById;
        const selectedRows = selectedRowIds.flatMap((key) =>
          rowsById[key] ? [rowsById[key].original] : [],
        );
        const selectedRowKeys: Key[] = selectedRowIds.map((key) => {
          const row = rowsById[key];

          if (!row || !rowKey) return key;
          if (isFunction(rowKey)) {
            return rowKey(
              row.original,
              row.index,
              row.parentId ? rowsById[row.parentId]?.original : undefined,
            );
          }

          return get(row.original, rowKey) as Key;
        });

        rowSelection.onChange?.(selectedRowKeys, selectedRows);
      },
    }),
    ...(!isPaginationHidden && {
      getPaginationRowModel: getPaginationRowModel(),
      onPaginationChange: (updater) => {
        const next = isFunction(updater) ? updater(pagination) : updater;

        changeAt(next.pageIndex + 1);
        changePageSize(next.pageSize);
      },
    }),
    ...(expandable && {
      getSubRows: (record: T) => (record as T & { children?: T[] }).children,
      getExpandedRowModel: getExpandedRowModel(),
      onExpandedChange: (updater) => {
        const next = isFunction(updater) ? updater(expanded) : updater;
        if (isUndefined(expandedKeys)) setUncontrolledExpanded(next);
        onExpandedKeysChange?.(
          next === true ? table.getRowModel().flatRows.map((row) => row.id) : Object.keys(next),
        );
      },
    }),

    ...(rowKey && {
      getRowId: (record: T, index: number, parent) =>
        String(isFunction(rowKey) ? rowKey(record, index, parent?.original) : get(record, rowKey)),
    }),
  });

  const contextValue = useContextValue({
    table,
    bordered,
    sortDescriptor,
    onSortChange,
    classNames,
  });

  const styled = {
    table: $props(styles.table.base),
    pagination: $props(styles.pagination.base),
  };

  return (
    <Context.Provider value={contextValue}>
      <Loading loading={loading}>
        <table
          className={stringify(classNames.table, className, styled.table.className)}
          style={{
            ...styled.table.style,
            ...style,
          }}
        >
          <Header<T> />
          <Body<T> />
        </table>

        {!isPaginationHidden && (
          <div className={styled.pagination.className} style={styled.pagination.style}>
            <Pagination
              total={paginationProps?.total ?? dataSource.length}
              at={pagination.pageIndex - 1}
              pageSize={pagination.pageSize}
              onChange={changeAt}
              onPageSizeChange={changePageSize}
            />
          </div>
        )}
      </Loading>
    </Context.Provider>
  );
};

export default Table;
