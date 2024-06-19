import type { DeepKeys } from "@tanstack/react-table";
import type { Table } from "@tanstack/react-table";
import type { ComponentProps } from "../../types/element";
import type { Key, ReactNode } from "react";

export type SortDirection = "ascending" | "descending";

export type SortDescriptor = {
  key: Key;
  direction: SortDirection;
};

/**
 * @description
 * column def
 */
export type Column<T, V = unknown> = {
  /**
   * @description
   * key
   */
  key: DeepKeys<T>;

  /**
   * @description
   * title
   */
  title: ReactNode | (() => ReactNode);

  /**
   * @description
   * custom render, render is not provided, just render value
   */
  render?: (value: V, record: T, index: number) => ReactNode | unknown;

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
export type TableProps<T> = {
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

  // TODO add to docs
  /**
   * @description
   * sort descriptor
   */
  sortDescriptor: SortDescriptor;

  // TODO add to docs
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
 * body props
 */
export type BodyProps = ComponentProps;

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
  value: Key;
};
