import type { ColumnDef, ColumnHelper } from "@tanstack/react-table";
import type { Table } from "@tanstack/react-table";
import type { ComponentProps } from "../../types/element";
import type { Styles } from "../../types/stylex";

/**
 * @description
 * table props
 */
export type TableProps<T> = {
  /**
   * @description
   * data
   */
  dataSource?: T[];

  /**
   * @description
   * in react table, columns always are created by helper
   * so in musae, we use this function to create columns
   */
  columns?: (helper: ColumnHelper<T>) => ColumnDef<T, any>[];

  /**
   * @description
   * bordered
   */
  bordered?: boolean;
};

/**
 * @author murukal
 * @description
 * context value type
 */
export type ContextValue<T> = {
  /**
   * @description
   * table
   */
  table?: Table<T>;

  /**
   * @description
   * if current table is bordered
   */
  bordered: boolean;
};

/**
 * @description
 * header props
 */
export type HeaderProps = ComponentProps & {
  styles: Styles;
};

/**
 * @description
 * body props
 */
export type BodyProps = ComponentProps & {
  styles: Styles;
};
