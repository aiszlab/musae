import type { DeepKeys } from "@tanstack/react-table";
import type { Table } from "@tanstack/react-table";
import type { ComponentProps } from "./element";
import type { Key, ReactNode } from "react";
import type { PagiantionProps } from "./pagination";

export type SortDirection = "ascending" | "descending" | null;

export type SortDescriptor = {
  key: Key;
  direction: SortDirection;
};

/**
 * @zh 表格行选择配置。
 * @en Table row selection configuration.
 */
export type RowSelection<T> = {
  /** @zh 受控的已选行标识。 @en Controlled selected row keys. */
  selectedRowKeys?: Key[];
  /** @zh 非受控模式下的初始已选行标识。 @en Initial selected row keys in uncontrolled mode. */
  defaultSelectedRowKeys?: Key[];
  /** @zh 已选行变化时触发。 @en Called when selected rows change. */
  onChange?: (selectedRowKeys: Key[], selectedRows: T[]) => void;
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

  /**
   * @description 表格加载状态
   * 值为`true`时，表格自动显示加载中的状态
   * @default false
   */
  loading?: boolean;

  /** Enable hierarchical rows. Records are read from their `children` property. @default false */
  expandable?: boolean;

  /** Stable identifiers of expanded rows (controlled). */
  expandedKeys?: Key[];

  /** Initially expanded row identifiers (uncontrolled). */
  defaultExpandedKeys?: Key[];

  /** Called whenever the expanded row identifiers change. */
  onExpandedKeysChange?: (keys: Key[]) => void;

  /**
   * Stable row identifier. Hierarchical tables should always provide this rather than relying on
   * TanStack Table's positional row ids.
   */
  rowKey?: DeepKeys<T> | ((record: T, index: number, parent?: T) => Key);

  /**
   * @zh 配置内置分页；设置为 `false` 或省略时不显示分页。
   * @en Configure built-in pagination. Set to `false` or omit to hide it.
   */
  pagination?: false | PagiantionProps;

  /**
   * @zh 配置行选择；设置后表格会显示选择框列。
   * @en Configure row selection. A selection column is shown when provided.
   */
  rowSelection?: RowSelection<T>;
};

/** Recursive record shape used by the built-in hierarchical-row reader. */
export type ExpandableRecord<T> = T & { children?: ExpandableRecord<T>[] };

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
