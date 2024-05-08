import { createColumnHelper } from "@tanstack/react-table";
import { type CSSProperties, useContext, useMemo, useRef } from "react";
import type { ContextValue, TableProps } from "./types";
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
export const useColumns = <T>([columns]: [TableProps<T>["columns"]]) => {
  const { current: helper } = useRef(createColumnHelper<T>());
  return columns ? columns(helper) : [];
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
