import React from "react";
import { useTable } from "./hooks";
import { flexRender } from "@tanstack/react-table";

const Header = <T,>() => {
  const { table } = useTable<T>();

  if (!table) return null;

  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id}>
              {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default Header;
