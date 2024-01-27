import React from "react";
import { useTable } from "./hooks";
import { flexRender } from "@tanstack/react-table";
import type { BodyProps } from "./types";
import * as stylex from "@stylexjs/stylex";
import clsx from "clsx";
import { BODY } from "../theme/theme";
import { sizes } from "../theme/tokens.stylex";

const styles = stylex.create({
  bordered: {
    borderInline: sizes.smallest,
  },
});

const Body = <T,>(props: BodyProps) => {
  const { table, bordered } = useTable<T>();

  if (!table) return;

  const styled = stylex.props(bordered && styles.bordered, BODY.small, props.styles);

  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id} className={clsx(styled.className)} style={styled.style}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default Body;
