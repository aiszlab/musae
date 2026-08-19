import styles from "./styles";
import React from "react";
import { useTable } from "./context";
import { flexRender } from "@tanstack/react-table";
import { props as $props } from "@stylexjs/stylex";
import { isEmpty } from "@aiszlab/relax";
import { Empty } from "../empty";
import { stringify } from "@aiszlab/relax/class-name";
import { $body } from "../theme/theme";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";
import { Loading } from "../loading";

const Body = <T,>() => {
  const { table, bordered, classNames } = useTable<T>();
  const _themeColorVars = useThemeColorVars(["outline-variant"]);

  if (!table) return null;

  const styled = $props(styles.body.cell, bordered && styles.body.bordered, $body.small);
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
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className={stringify(styled.className)} style={styled.style}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
    </tbody>
  );
};

export default Body;
