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
   */
  total?: number;

  /**
   * @description
   * page size
   */
  pageSize?: number;

  /**
   * @description
   * siblings
   */
  siblings?: number;

  /**
   * @description
   * boundaries
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
