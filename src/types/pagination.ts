import type { useCounter } from "@aiszlab/relax";

type UsedCounter = ReturnType<typeof useCounter>;

/**
 * @description
 * pagiantion item type
 */
export type PaginationItemType = "prev" | "next" | "more-prev" | "more-next";

/**
 * @author murukal
 *
 * @description
 * pagination props
 */
export type PagiantionProps = {
  /**
   * @description
   * total count
   * @default 0
   */
  total?: number;

  /**
   * @description
   * page size
   * @default 10
   */
  pageSize?: number;

  /**
   * @description
   * siblings
   * @default 1
   */
  siblings?: number;

  /**
   * @description
   * boundaries
   * @default 1
   */
  boundaries?: number;

  /**
   * @description
   * page sizes
   * @default [10, 20, 50, 100]
   */
  pageSizes?: number[];

  /**
   * @description
   * current page at
   * @default 1
   */
  at?: number;

  /**
   * @description
   * change handler when current page `at` changed
   */
  onChange?: (at: number) => void;

  /**
   * @description
   * change handler when `pageSize` changed
   */
  onPageSizeChange?: (pageSize: number) => void;
};

export type PaginationItems = (PaginationItemType | number)[];

/**
 * @description
 * pagination item props
 */
export type PaginationItemProps = {
  /**
   * @description
   * value
   */
  value: PaginationItemType | number;

  /**
   * @description
   * add
   */
  add: UsedCounter[1]["add"];

  /**
   * @description
   * subtract
   */
  subtract: UsedCounter[1]["subtract"];

  /**
   * @description
   * click handler
   */
  onClick: (page: number) => void;

  /**
   * @description
   * checked
   */
  checked: boolean;

  /**
   * @description
   * has prev
   */
  hasPrev: boolean;

  /**
   * @description
   * has next
   */
  hasNext: boolean;
};
