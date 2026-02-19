import type { DeepKeys } from "@tanstack/react-table";
import type { Table } from "@tanstack/react-table";
import type { ComponentProps } from "./element";
import type { Key, ReactNode } from "react";

export type SortDirection = "ascending" | "descending" | null;

export type SortDescriptor = {
  key: Key;
  direction: SortDirection;
};

/**
 * @description
 * column def
 */
export type Column<T> = {
  /**
   * @description
   * key
   */
  key?: Key;

  /**
   * @description
   * value at
   */
  valueAt?: DeepKeys<T>;

  /**
   * @description
   * title
   */
  title: ReactNode | (() => ReactNode);

  /**
   * @description
   * custom render, render is not provided, just render value
   */
  render?: (value: unknown, record: T, index: number) => ReactNode | unknown;

  /**
   * @description
   * enable sort
   * @default false
   */
  sortable?: boolean;

  /**
   * @description
   * allowed sort orders
   */
  sortDirections?: SortDirection[];
};

/**
 * @description
 * table props
 */
export type TableProps<T> = ComponentProps & {
  /**
   * @description
   * data
   * @default []
   */
  dataSource?: T[];

  /**
   * @description
   * columns
   * @default void 0
   */
  columns?: Column<T>[];

  /**
   * @description
   * bordered
   * @default false
   */
  bordered?: boolean;

  /**
   * @description
   * sort descriptor
   * @default void 0
   */
  sortDescriptor?: SortDescriptor;

  /**
   * @description
   * callback when table has changed, like sort
   * @default void 0
   */
  onSortChange?: (sortDescriptor: SortDescriptor) => void;
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

  /**
   * {@link} `SortDescriptor`
   */
  sortDescriptor?: SortDescriptor;

  /**
   * @description
   * `SortDescriptor` Setter
   */
  onSortChange?: (sortDescriptor: SortDescriptor) => void;
};

/**
 * @description
 * header props
 */
export type HeaderProps = ComponentProps;

/**
 * @description
 * header cell props
 */
export type HeaderCellProps = {
  // is current cell sortable
  sortable?: boolean;

  // children
  children: ReactNode | (() => ReactNode);

  // key
  columnKey: Key;

  // sort dierctions
  sortDirections: SortDirection[];
};
