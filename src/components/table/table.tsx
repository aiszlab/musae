import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import React, { CSSProperties } from "react";
import { useColumns, useContextValue } from "./hooks";
import type { TableProps } from "./types";
import Header from "./header";
import Context from "./context";
import Body from "./body";
import * as stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

const styles = stylex.create({
  table: {
    width: "400px",
  },

  cell: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
    paddingInline: spacing.small,
    paddingBlock: spacing.medium,
    borderColor: props.outlineColor,
    borderStyle: "solid",
    borderBottomWidth: sizes.smallest,
  }),
});

const Table = <T,>({ bordered = true, ...props }: TableProps<T>) => {
  const columns = useColumns<T>([props.columns]);
  const table = useReactTable({
    columns: columns,
    data: props.dataSource ?? [],
    getCoreRowModel: getCoreRowModel(),
  });
  const theme = useTheme();

  const contextValue = useContextValue({ table, bordered });
  const cellStyles = [
    styles.cell({
      outlineColor: theme.colors[ColorToken.OutlineVariant],
    }),
  ];

  return (
    <Context.Provider value={contextValue}>
      <table {...stylex.props(styles.table)}>
        <Header<T> styles={cellStyles} />
        <Body<T> styles={cellStyles} />
      </table>
    </Context.Provider>
  );
};

export default Table;
