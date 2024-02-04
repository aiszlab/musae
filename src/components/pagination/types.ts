/**
 * @description
 * pagiantion item type
 */
export enum PaginationItemType {
  Prev = "prev",
  Next = "next",
  Dots = "dots",
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
   * prev
   */
  prev: () => void;

  /**
   * @description
   * next
   */
  next: () => void;

  /**
   * @description
   * change
   */
  onPageChange: (page: number) => void;
};
