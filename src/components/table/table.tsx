import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import React from "react";
import { useColumns, useContextValue } from "./hooks";
import type { TableProps } from "musae/types/table";
import Header from "./header/header";
import Context from "./context";
import Body from "./body";
import stylex from "@stylexjs/stylex";
import { clsx } from "@aiszlab/relax";
import { useClassNames } from "../../hooks/use-class-names";
import { TableClassToken } from "../../utils/class-name";

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
  className,
  style,
}: TableProps<T>) => {
  const classNames = useClassNames("table");
  const columns = useColumns<T>({ columns: _columns });
  const table = useReactTable({
    columns,
    data: dataSource,
    getCoreRowModel: getCoreRowModel(),
  });

  const contextValue = useContextValue({ table, bordered, sortDescriptor, onSortChange });

  const styled = stylex.props(styles.table);

  return (
    <Context.Provider value={contextValue}>
      <table
        className={clsx(classNames[TableClassToken.Table], className, styled.className)}
        style={{
          ...styled.style,
          ...style,
        }}
      >
        <Header<T> />
        <Body<T> />
      </table>
    </Context.Provider>
  );
};

export default Table;
