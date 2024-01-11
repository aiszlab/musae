import { ColumnDef, ColumnHelper } from "@tanstack/react-table";
import { Table } from "@tanstack/react-table";
import { ComponentProps } from "../../types/element";

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
};

/**
 * @description
 * header props
 */
export type HeaderProps = ComponentProps & {};
