import React from "react";
import { useTable } from "./hooks";
import { flexRender } from "@tanstack/react-table";

const Body = <T,>() => {
  const { table } = useTable<T>();

  if (!table) return;

  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default Body;
