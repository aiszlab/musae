import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import React from "react";
import { useColumns, useContextValue } from "./hooks";
import type { TableProps } from "musae/types/table";
import Header from "./header/header";
import Context from "./context";
import Body from "./body";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  table: {
    width: "100%",
  },
});

const Table = <T,>({
  bordered = false,
  dataSource = [],
  columns: _columns = [],
  sortDescriptor,
  onSortChange,
}: TableProps<T>) => {
  const columns = useColumns<T>({ columns: _columns });
  const table = useReactTable({
    columns,
    data: dataSource,
    getCoreRowModel: getCoreRowModel(),
  });

  const contextValue = useContextValue({ table, bordered, sortDescriptor, onSortChange });

  return (
    <Context.Provider value={contextValue}>
      <table {...stylex.props(styles.table)}>
        <Header<T> />
        <Body<T> />
      </table>
    </Context.Provider>
  );
};

export default Table;
