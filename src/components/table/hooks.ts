import { type ColumnDef, createColumnHelper, DeepKeys, IdentifiedColumnDef } from "@tanstack/react-table";
import { type CSSProperties, useContext, useMemo, useRef } from "react";
import type { Column, ContextValue } from "./types";
import Context from "./context";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";

export const styles = stylex.create({
  cell: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
    paddingInline: spacing.small,
    paddingBlock: spacing.medium,
    borderColor: props.outlineColor,
    borderStyle: "solid",
    borderBottomWidth: sizes.smallest,
  }),
});

/**
 * @description
 * use columns
 */
export const useColumns = <T>({ columns }: { columns: Column<T>[] }) => {
  const helper = useRef(createColumnHelper<T>());

  return useMemo<ColumnDef<T, any>[]>(() => {
    return columns.map((column) => {
      // @ts-ignore
      return helper.current.accessor(column.key, {
        header: column.title,
      });
    });
  }, [columns]);
};

/**
 * @author murukal
 * @description
 * use table context hook
 */
export const useTable = <T>() => {
  return useContext(Context) as ContextValue<T>;
};

/**
 * @author murukal
 * @description
 * for context value
 */
export const useContextValue = <T>({
  table: _table,
  bordered,
}: {
  table: ContextValue<T>["table"];
  bordered: boolean;
}) => {
  return useMemo<ContextValue<unknown>>(
    () => ({
      table: _table as ContextValue<unknown>["table"],
      bordered,
    }),
    [_table, bordered]
  );
};
