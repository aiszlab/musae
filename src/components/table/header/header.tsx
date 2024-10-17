import React, { type CSSProperties } from "react";
import { useTable } from "../context";
import { flexRender } from "@tanstack/react-table";
import type { HeaderProps } from "musae/types/table";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../../theme/tokens.stylex";
import { useTheme } from "../../theme";
import { clsx } from "@aiszlab/relax";
import { typography } from "../../theme/theme";
import { useClassNames } from "../../../hooks/use-class-names";
import { ComponentToken } from "../../../utils/component-token";
import { TableClassToken } from "../../../utils/class-name";

const styles = stylex.create({
  cell: (props: {
    backgroundColor: CSSProperties["backgroundColor"];
    borderColor: CSSProperties["borderColor"];
  }) => ({
    backgroundColor: props.backgroundColor,
    textAlign: "start",
    position: "relative",

    paddingInline: spacing.small,
    paddingBlock: spacing.medium,
    borderColor: props.borderColor,
    borderStyle: "solid",
    borderBottomWidth: sizes.smallest,
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
  const classNames = useClassNames(ComponentToken.Table);

  if (!table) return null;

  const headerGroups = table.getHeaderGroups();
  const styled = stylex.props(
    styles.cell({
      backgroundColor: theme.colors.surface,
      borderColor: theme.colors["outline-variant"],
    }),
    typography.label.small,
    bordered && styles.bordered,
    !bordered &&
      styles.unbordered({
        backgroundColor: theme.colors["outline-variant"],
      }),
  );

  return (
    <thead className={clsx(classNames[TableClassToken.Header], props.className)}>
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id} className={clsx(styled.className)} style={styled.style}>
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
