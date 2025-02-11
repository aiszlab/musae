import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import React from "react";
import { useColumns, useContextValue } from "./hooks";
import type { TableProps } from "../../types/table";
import Header from "./header/header";
import { Context, CLASS_NAMES } from "./context";
import Body from "./body";
import stylex from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { useClassNames } from "../../hooks/use-class-names";

const styles = stylex.create({
  table: {
    width: "100%",

    // reset styles
    borderCollapse: "collapse",
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
  const classNames = useClassNames(CLASS_NAMES);
  const columns = useColumns<T>({ columns: _columns });
  const table = useReactTable({
    columns,
    data: dataSource,
    getCoreRowModel: getCoreRowModel(),
  });

  const contextValue = useContextValue({
    table,
    bordered,
    sortDescriptor,
    onSortChange,
    classNames,
  });

  const styled = stylex.props(styles.table);

  return (
    <Context.Provider value={contextValue}>
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
    </Context.Provider>
  );
};

export default Table;
