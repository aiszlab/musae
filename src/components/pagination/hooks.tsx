import {
  clamp,
  isUndefined,
  range,
  useControlledState,
  useCounter,
  useEvent,
} from "@aiszlab/relax";
import { useMemo } from "react";
import type { PaginationItems, PaginationItemType } from "../../types/pagination";

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
  at: _at,
  onChange: _onChange,
  onPageSizeChange: _onPageSizeChange,
}: {
  total: number;
  siblings: number;
  boundaries: number;
  pageSize?: number;
  at?: number;
  onChange?: (at: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
}) => {
  const [pageSize, setPageSize] = useControlledState<number>(_pageSize, { defaultState: 10 });

  // convert total into page count
  // at least 1 page
  const pages = useMemo(
    () => Math.max(1, Math.ceil(total / Math.max(1, pageSize))),
    [total, pageSize],
  );

  const [at, { add, subtract, setCount }] = useCounter(_at, {
    min: 1,
    max: pages,
  });

  const paginationItems = useMemo<PaginationItems>(() => {
    // max renderable pages
    const renderable = siblings * 2 + 3 + boundaries * 2;

    if (renderable > pages) {
      return ["prev", ...range(1, pages), "next"];
    }

    const focusedAt = clamp(at, boundaries + 3, pages - (boundaries + 2));
    const from = Math.max(focusedAt - siblings, boundaries);
    const to = Math.min(focusedAt + siblings, pages - (boundaries - 1));
    const hasPrevMore = from > boundaries + 2;
    const hasNextMore = to < pages - (boundaries + 1);

    return [
      "prev",
      ...range(1, boundaries),
      ...(hasPrevMore ? (["more-prev"] satisfies PaginationItemType[]) : [boundaries + 1]),
      ...range(from, to),
      ...(hasNextMore ? (["more-next"] satisfies PaginationItemType[]) : [pages - boundaries]),
      ...range(pages - (boundaries - 1), pages),
      "next",
    ];
  }, [boundaries, at, pages, siblings]);

  // whether prev button is usable
  const hasPrev = at > 1;
  // whether next button is usable
  const hasNext = at < pages;

  const onChange = useEvent((at: number) => {
    _onChange?.(at);
    setCount(at);
  });

  const onPageSizeChange = useEvent((pageSize?: number) => {
    if (isUndefined(pageSize)) {
      return;
    }

    _onPageSizeChange?.(pageSize);
    setPageSize(pageSize);
  });

  return {
    paginationItems,
    add,
    subtract,
    onChange,
    at,
    hasPrev,
    hasNext,
    pageSize,
    onPageSizeChange,
  };
};
