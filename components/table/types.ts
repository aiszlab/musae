import { ColumnDef, ColumnHelper } from "@tanstack/react-table";

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
};
