import React from "react";
import { useTable } from "./context";
import { flexRender } from "@tanstack/react-table";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { isEmpty } from "@aiszlab/relax";
import { sizes, spacing } from "../theme/tokens.stylex";
import { Empty } from "../empty";
import { stringify } from "@aiszlab/relax/class-name";
import { $body } from "../theme/theme";
import { type ThemeColorVariable, useThemeColorVars } from "../../hooks/use-theme-color-vars";

const styles = $create({
  cell: {
    // reset styles
    borderInlineWidth: sizes.none,
    borderBlockStartWidth: sizes.none,

    // apply styles
    paddingInline: spacing.xxsmall,
    paddingBlock: spacing.medium,
    borderColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
    borderStyle: "solid",
    borderBlockEndWidth: sizes.smallest,
  },

  bordered: {
    borderInlineWidth: sizes.smallest,
  },
});

const Body = <T,>() => {
  const { table, bordered, classNames } = useTable<T>();
  const _themeColorVars = useThemeColorVars(["outline-variant"]);

  if (!table) return null;

  const styled = $props(styles.cell, bordered && styles.bordered, $body.small);
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
