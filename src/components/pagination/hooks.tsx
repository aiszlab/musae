import { clamp, range, useCounter } from "@aiszlab/relax";
import { useMemo } from "react";
import { type PagiantionProps, type PaginationItems, PaginationItemType } from "./types";

/**
 * @author murukal
 *
 * @description
 * use pagination
 */
export const usePagiantion = ({ total = 0, siblings = 1, boundaries = 1, ...dependencies }: PagiantionProps) => {
  const pageSize = dependencies.pageSize || 10;
  const pages = Math.ceil(total / pageSize);
  const {
    count: page,
    next,
    prev,
    setCount,
  } = useCounter({
    initialValue: 1,
    min: 1,
    max: pages,
  });

  const paginationItems = useMemo<PaginationItems>(() => {
    // max renderable pages
    const renderable = siblings * 2 + 3 + boundaries * 2;

    if (renderable > pages) {
      return [PaginationItemType.Prev, ...range(1, pages), PaginationItemType.Next];
    }

    const focusedAt = clamp(page, boundaries + 3, pages - (boundaries + 2));
    const from = Math.max(focusedAt - siblings, boundaries);
    const to = Math.min(focusedAt + siblings, pages - (boundaries - 1));
    const hasPrevMore = from > boundaries + 2;
    const hasNextMore = to < pages - (boundaries + 1);

    return [
      PaginationItemType.Prev,
      ...range(1, boundaries),
      ...(hasPrevMore ? [PaginationItemType.MorePrev] : [boundaries + 1]),
      ...range(from, to),
      ...(hasNextMore ? [PaginationItemType.MoreNext] : [pages - boundaries]),
      ...range(pages - (boundaries - 1), pages),
      PaginationItemType.Next,
    ];
  }, [boundaries, page, pages, siblings]);

  // whether prev button is usable
  const hasPrev = page > 1;
  // whether next button is usable
  const hasNext = page < pages;

  return {
    paginationItems,
    next,
    prev,
    changePage: setCount,
    page,
    hasPrev,
    hasNext,
  };
};
