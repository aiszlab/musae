import React from "react";
import { useTable } from "./hooks";
import { flexRender } from "@tanstack/react-table";
import { makeStyles, shorthands } from "@griffel/react";

const useClasses = makeStyles({
  cell: {
    position: "relative",
    ...shorthands.padding("16px"),
  },
});

const Body = <T,>() => {
  const { table } = useTable<T>();
  const classes = useClasses();

  if (!table) return;

  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id} className={classes.cell}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default Body;
