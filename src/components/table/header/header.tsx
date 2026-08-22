import styles from "./styles";
import React from "react";
import { useTable } from "../context";
import { flexRender } from "@tanstack/react-table";
import type { HeaderProps } from "../../../types/table";
import { props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { $label } from "../../../components/theme/theme";
import { useThemeColorVars } from "../../../hooks/use-theme-color-vars";
import { EXPAND_COLUMN_ID } from "../context";

const Header = <T,>(props: HeaderProps) => {
  const { table, bordered, classNames } = useTable<T>();
  const _themeColorVars = useThemeColorVars(["surface", "outline-variant"]);

  if (!table) return null;

  const headerGroups = table.getHeaderGroups();
  const styled = $props(
    styles.header.cell,
    $label.small,
    bordered && styles.header.bordered,
    !bordered && styles.header.unbordered,
  );

  return (
    <thead
      className={stringify(classNames.header, props.className)}
      style={{
        ...styled.style,
        ..._themeColorVars,
      }}
    >
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              className={stringify(
                styled.className,
                header.column.id === EXPAND_COLUMN_ID && classNames.expandColumn,
              )}
              style={styled.style}
            >
              {header.isPlaceholder
                ? null
                : flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default Header;
