import React, { CSSProperties } from "react";
import { useTable } from "./hooks";
import { flexRender } from "@tanstack/react-table";
import { HeaderProps } from "./types";
import * as stylex from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import clsx from "clsx";
import { ColorToken } from "../../utils/colors";
import { typography } from "../theme/theme";
import { styles as _styles } from "./hooks";

const styles = stylex.create({
  cell: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    backgroundColor: props.backgroundColor,
    textAlign: "start",
    position: "relative",
  }),

  unbordered: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    ":not(:last-of-type)::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      width: sizes.smallest,
      height: sizes.xsmall,
      backgroundColor: props.backgroundColor,
      transform: "translateY(-50%)",
      insetInlineEnd: 0,
    },
  }),

  bordered: {
    borderWidth: sizes.smallest,
  },
});

const Header = <T,>(props: HeaderProps) => {
  const { table, bordered } = useTable<T>();
  const theme = useTheme();

  if (!table) return null;

  const headerGroups = table.getHeaderGroups();
  const styled = stylex.props(
    styles.cell({
      backgroundColor: theme.colors[ColorToken.Surface],
    }),
    typography.label.small,
    bordered
      ? styles.bordered
      : styles.unbordered({
          backgroundColor: theme.colors[ColorToken.OutlineVariant],
        }),
    _styles.cell({
      outlineColor: theme.colors[ColorToken.OutlineVariant],
    })
  );

  return (
    <thead className={props.className}>
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id} className={clsx(styled.className)} style={styled.style}>
              {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default Header;
