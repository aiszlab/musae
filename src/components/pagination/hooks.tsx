import { range, useCounter } from "@aiszlab/relax";
import { useMemo } from "react";
import { PaginationItemType } from "./enums";
import type { PagiantionProps, PaginationItems } from "./types";

/**
 * @author murukal
 *
 * @description
 * use pagination
 */
export const usePagiantion = ({ total = 0, siblings = 1, boundaries = 1, ...dependencies }: PagiantionProps) => {
  const pageSize = dependencies.pageSize || 10;
  const pages = Math.ceil(total / pageSize);
  const { count: page, next, prev, setCount: changePage } = useCounter();

  const paginationItems = useMemo<PaginationItems>(() => {
    // max renderable pages
    const renderable = siblings * 2 + 3 + boundaries * 2;

    if (renderable > pages) {
      return [PaginationItemType.Prev, ...range(1, pages), PaginationItemType.Next];
    }

    const from = Math.max(page - siblings, boundaries);
    const to = Math.min(page + siblings, pages - boundaries);
    const isPrevMore = from > boundaries + 2;
    const isNextMore = to < pages - (boundaries + 1);

    return [
      PaginationItemType.Prev,
      ...range(1, boundaries),
      ...(isPrevMore ? [PaginationItemType.Dots] : []),
      ...range(from, to),
      ...(isNextMore ? [PaginationItemType.Dots] : []),
      ...range(pages - boundaries + 1, pages),
      PaginationItemType.Next,
    ];
  }, [boundaries, page, pages, siblings]);

  return {
    paginationItems,
    next,
    prev,
    changePage,
  };
};
