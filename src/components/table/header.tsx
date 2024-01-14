import React from "react";
import { useTable } from "./hooks";
import { flexRender } from "@tanstack/react-table";
import { HeaderProps } from "./types";

// const useClasses = makeStyles({
//   cell: {
//     position: "relative",
//     ...shorthands.padding("16px"),

//     ":not(:last-child)::before": {
//       content: "''",
//       height: "50%",
//       position: "absolute",
//       width: "1px",
//       backgroundColor: COLOR_TOKENS[Token.ColorOutline],
//       insetInlineEnd: 0,
//       top: "50%",
//       transform: "translateY(-50%)",
//     },
//   },
// });

const Header = <T,>(props: HeaderProps) => {
  const { table } = useTable<T>();

  if (!table) return null;

  return (
    <thead className={props.className}>
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
