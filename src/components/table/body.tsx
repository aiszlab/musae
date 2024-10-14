import React, { type CSSProperties } from "react";
import { useTable } from "./context";
import { flexRender } from "@tanstack/react-table";
import stylex from "@stylexjs/stylex";
import { clsx, isEmpty } from "@aiszlab/relax";
import { typography } from "../theme/theme";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { Empty } from "../empty";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken } from "../../utils/component-token";
import { TableClassToken } from "../../utils/class-name";

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

const Body = <T,>() => {
  const { table, bordered } = useTable<T>();
  const theme = useTheme();
  const classNames = useClassNames(ComponentToken.Table);

  if (!table) return null;

  const styled = stylex.props(
    bordered && styles.bordered,
    typography.body.small,
    styles.cell({ borderColor: theme.colors[ColorToken.OutlineVariant] }),
  );

  const rows = table.getRowModel().rows;
  const _isEmpty = isEmpty(rows);

  return (
    <tbody className={classNames[TableClassToken.Body]}>
      {_isEmpty && (
        <tr>
          <td colSpan={table.getAllColumns().length}>
            <Empty />
          </td>
        </tr>
      )}

      {!_isEmpty &&
        table.getRowModel().rows.map((row) => (
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
