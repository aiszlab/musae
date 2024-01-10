import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import React from "react";
import { useColumns, useContextValue } from "./hooks";
import type { TableProps } from "./types";
import Header from "./header";
import Context from "./context";
import Body from "./body";
import { makeStyles } from "@griffel/react";

const useClasses = makeStyles({
  table: {
    width: "400px",
  },
});

const Table = <T,>({ ...props }: TableProps<T>) => {
  const columns = useColumns<T>([props.columns]);
  const table = useReactTable({
    columns: columns,
    data: props.dataSource ?? [],
    getCoreRowModel: getCoreRowModel(),
  });

  const classes = useClasses();
  const contextValue = useContextValue({ table });

  return (
    <Context.Provider value={contextValue}>
      <table className={classes.table}>
        <Header<T> />
        <Body<T> />

        {/* <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.footer, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </tfoot> */}
      </table>
    </Context.Provider>
  );
};

export default Table;
