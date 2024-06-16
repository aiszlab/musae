import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import React from "react";
import { useColumns, useContextValue } from "./hooks";
import type { TableProps } from "./types";
import Header from "./header";
import Context from "./context";
import Body from "./body";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  table: {
    width: "400px",
  },
});

const Table = <T,>({ bordered = false, dataSource = [], columns: _columns = [], ...props }: TableProps<T>) => {
  const columns = useColumns<T>({ columns: _columns });
  const table = useReactTable({
    columns,
    data: dataSource,
    getCoreRowModel: getCoreRowModel(),
  });

  const contextValue = useContextValue({ table, bordered });

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
