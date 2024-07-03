import { clamp, range, useControlledState, useCounter } from "@aiszlab/relax";
import { useMemo } from "react";
import { type PaginationItems, PaginationItemType } from "./types";

/**
 * @author murukal
 *
 * @description
 * use pagination
 */
export const usePagiantion = ({
  total,
  siblings,
  boundaries,
  pageSize: _pageSize,
}: {
  total: number;
  siblings: number;
  boundaries: number;
  pageSize?: number;
}) => {
  const [pageSize, setPageSize] = useControlledState(_pageSize!, { defaultState: 10 });
  const pages = useMemo(() => Math.ceil(total / Math.max(1, pageSize)), [total, pageSize]);
  const [page, { add, subtract, setCount }] = useCounter(1, {
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

  const onPageSizeChange = (pageSize: number) => {
    setPageSize(pageSize);
  };

  return {
    paginationItems,
    add,
    subtract,
    changePage: setCount,
    page,
    hasPrev,
    hasNext,
    pageSize,
    onPageSizeChange,
  };
};
