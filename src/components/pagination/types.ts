import type { useCounter } from "@aiszlab/relax";

type UsedCounter = ReturnType<typeof useCounter>;

/**
 * @description
 * pagiantion item type
 */
export enum PaginationItemType {
  Prev = "prev",
  Next = "next",
  MorePrev = "more-prev",
  MoreNext = "more-next",
}

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
};

export type PaginationItems = [PaginationItemType.Prev, ...(PaginationItemType | number)[], PaginationItemType.Next];

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
   * change
   */
  onPageChange: (page: number) => void;

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
