import type { DeepKeys } from "@tanstack/react-table";
import type { Table } from "@tanstack/react-table";
import type { ComponentProps } from "../../types/element";
import type { ReactNode } from "react";

/**
 * @description
 * column def
 */
export type Column<T> = {
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
export type HeaderProps = ComponentProps;

/**
 * @description
 * body props
 */
export type BodyProps = ComponentProps;
