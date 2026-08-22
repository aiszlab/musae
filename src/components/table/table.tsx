import styles from "./styles";
import {
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  type ExpandedState,
} from "@tanstack/react-table";
import React, { useMemo, useState } from "react";
import { useColumns, useContextValue } from "./hooks";
import type { TableProps } from "../../types/table";
import Header from "./header/header";
import { Context, CLASS_NAMES } from "./context";
import Body from "./body";
import { props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { useClassNames } from "../../hooks/use-class-names";
import { Loading } from "../loading";
import { isFunction, isUndefined } from "@aiszlab/relax";

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
}: TableProps<T>) => {
  const classNames = useClassNames(CLASS_NAMES);
  const columns = useColumns<T>({ columns: _columns, expandable });
  const [uncontrolledExpanded, setUncontrolledExpanded] = useState<ExpandedState>(() =>
    Object.fromEntries(defaultExpandedKeys.map((key) => [String(key), true])),
  );
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
    ...(expandable && {
      getSubRows: (record: T) => (record as T & { children?: T[] }).children,
      getExpandedRowModel: getExpandedRowModel(),
      state: { expanded },
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
        String(
          isFunction(rowKey)
            ? rowKey(record, index, parent?.original)
            : (record as Record<string, unknown>)[rowKey as string],
        ),
    }),
  });

  const contextValue = useContextValue({
    table,
    bordered,
    sortDescriptor,
    onSortChange,
    classNames,
  });

  const styled = $props(styles.table.default);

  return (
    <Context.Provider value={contextValue}>
      <Loading loading={loading}>
        <table
          className={stringify(classNames.table, className, styled.className)}
          style={{
            ...styled.style,
            ...style,
          }}
        >
          <Header<T> />
          <Body<T> />
        </table>
      </Loading>
    </Context.Provider>
  );
};

export default Table;
