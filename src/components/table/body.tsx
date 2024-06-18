import React, { CSSProperties } from "react";
import { useTable } from "./context";
import { flexRender } from "@tanstack/react-table";
import type { BodyProps } from "./types";
import * as stylex from "@stylexjs/stylex";
import clsx from "clsx";
import { typography } from "../theme/theme";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

const styles = stylex.create({
  cell: (props: { borderColor: CSSProperties["borderColor"] }) => ({
    paddingInline: spacing.small,
    paddingBlock: spacing.medium,
    borderColor: props.borderColor,
    borderStyle: "solid",
    borderBottomWidth: sizes.smallest,
  }),

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
    styles.cell({ borderColor: theme.colors[ColorToken.OutlineVariant] })
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
