import React from "react";
import { useTable } from "./hooks";
import { flexRender } from "@tanstack/react-table";
import type { BodyProps } from "./types";
import * as stylex from "@stylexjs/stylex";
import clsx from "clsx";
import { typography } from "../theme/theme";
import { sizes } from "../theme/tokens.stylex";
import { styles as _styles } from "./hooks";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

const styles = stylex.create({
  bordered: {
    borderInline: sizes.smallest,
  },
});

const Body = <T,>(props: BodyProps) => {
  const { table, bordered } = useTable<T>();
  const theme = useTheme();

  if (!table) return null;

  const styled = stylex.props(
    bordered && styles.bordered,
    typography.body.small,
    _styles.cell({
      outlineColor: theme.colors[ColorToken.OutlineVariant],
    })
  );

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
