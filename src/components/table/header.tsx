import React, { CSSProperties } from "react";
import { useTable } from "./hooks";
import { flexRender } from "@tanstack/react-table";
import { HeaderProps } from "./types";
import * as stylex from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import clsx from "clsx";

const styles = stylex.create({
  cell: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
    borderWidth: sizes.smallest,
    borderStyle: "solid",
    borderColor: props.outlineColor,
  }),
});

// const useClasses = makeStyles({
//   cell: {
//     position: "relative",
//     ...shorthands.padding("16px"),

//     ":not(:last-child)::before": {
//       content: "''",
//       height: "50%",
//       position: "absolute",
//       width: "1px",
//       backgroundColor: COLOR_TOKENS[Token.ColorOutline],
//       insetInlineEnd: 0,
//       top: "50%",
//       transform: "translateY(-50%)",
//     },
//   },
// });

const Header = <T,>(props: HeaderProps) => {
  const { table } = useTable<T>();
  const theme = useTheme();

  if (!table) return null;

  const headerGroups = table.getHeaderGroups();
  const styled = stylex.props(
    styles.cell({
      outlineColor: theme.colors.outline,
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
