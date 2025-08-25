import React from "react";
import { useTable } from "../context";
import { flexRender } from "@tanstack/react-table";
import type { HeaderProps } from "../../../types/table";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { sizes, spacing } from "../../theme/tokens.stylex";
import { useTheme } from "../../theme";
import { stringify } from "@aiszlab/relax/class-name";
import { $label } from "../../../components/theme/theme";
import { type ThemeColorVariable, useThemeColorVars } from "../../../hooks/use-theme-color-vars";

const styles = $create({
  cell: {
    // reset styles
    borderWidth: sizes.none,

    // apply styles
    backgroundColor: "var(--color-surface)" satisfies ThemeColorVariable,
    borderColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
    textAlign: "start",
    position: "relative",
    paddingInline: spacing.xxsmall,
    paddingBlock: spacing.medium,
    borderStyle: "solid",
    borderBottomWidth: sizes.smallest,
  },

  unbordered: {
    ":not(:last-of-type)::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      width: sizes.smallest,
      height: sizes.xsmall,
      backgroundColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
      transform: "translateY(-50%)",
      insetInlineEnd: 0,
    },
  },

  bordered: {
    borderWidth: sizes.smallest,
  },
});

const Header = <T,>(props: HeaderProps) => {
  const { table, bordered, classNames } = useTable<T>();
  const theme = useTheme();
  const _themeColorVars = useThemeColorVars(["surface", "outline-variant"]);

  if (!table) return null;

  const headerGroups = table.getHeaderGroups();
  const styled = $props(
    styles.cell,
    $label.small,
    bordered && styles.bordered,
    !bordered && styles.unbordered,
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
            <th key={header.id} className={stringify(styled.className)} style={styled.style}>
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
