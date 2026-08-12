import React from "react";
import { useTable } from "./context";
import { flexRender } from "@tanstack/react-table";
import { props as $props } from "@stylexjs/stylex";
import { isEmpty } from "@aiszlab/relax";
import { Empty } from "../empty";
import { stringify } from "@aiszlab/relax/class-name";
import { $body } from "../theme/theme";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";
import { EXPAND_COLUMN_ID } from "./context";
import styles from "./styles";

const Body = <T,>() => {
  const { table, bordered, classNames } = useTable<T>();
  const _themeColorVars = useThemeColorVars(["outline-variant"]);

  if (!table) return null;

  const styled = $props(styles.bodyCell.default, bordered && styles.bodyCell.bordered, $body.small);
  const rows = table.getRowModel().rows;
  const _isEmpty = isEmpty(rows);

  return (
    <tbody className={classNames.body} style={_themeColorVars}>
      {_isEmpty && (
        <tr>
          <td colSpan={table.getAllColumns().length}>
            <Empty />
          </td>
        </tr>
      )}

      {!_isEmpty &&
        table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            className={stringify(
              row.getCanExpand() && classNames.expandableRow,
              row.depth > 0 && classNames.childRow,
            )}
          >
            {row.getVisibleCells().map((cell) => {
              const isFirstChildDataCell =
                row.depth > 0 &&
                cell.column.id !== EXPAND_COLUMN_ID &&
                cell.column.getIndex() === 1;
              const cellStyled = $props(isFirstChildDataCell && styles.bodyCell.child);

              return (
                <td
                  key={cell.id}
                  className={stringify(
                    styled.className,
                    cellStyled.className,
                    cell.column.id === EXPAND_COLUMN_ID && classNames.expandColumn,
                  )}
                  style={{
                    ...styled.style,
                    ...cellStyled.style,
                    ...(isFirstChildDataCell && { "--depth": row.depth }),
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              );
            })}
          </tr>
        ))}
    </tbody>
  );
};

export default Body;
