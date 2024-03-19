import { useCallback, useEffect, useRef } from "react";

/**
 * @description
 * repaint child
 */
export const useRepaint = ({ columns, rowGap }: { columns: number; rowGap: number }) => {
  const items = useRef<Map<number, HTMLDivElement | null>>(new Map());
  const orders = useRef<Map<number, number>>(new Map());
  const maxHeight = useRef<number>(0);

  const collect = useCallback((index: number, ref: HTMLDivElement | null) => {
    items.current.set(index, ref);
  }, []);

  useEffect(() => {
    const columnHeights = new Array(columns).fill(0);

    // reset
    orders.current.clear();
    maxHeight.current = 0;

    Array.from(items.current.entries()).forEach(([index, child]) => {
      if (!child) return;
      const childHeight = child.getBoundingClientRect().height;
      const order = columnHeights.indexOf(Math.min(...columnHeights));
      // count
      columnHeights[order] = columnHeights[order] + (columnHeights[order] && rowGap) + childHeight;
      // set order for render
      orders.current.set(index, order + 1);
    });

    maxHeight.current = Math.max(...columnHeights);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowGap]);

  const getOrder = useCallback((index: number) => {
    return orders.current.get(index) ?? null;
  }, []);

  return {
    maxHeight,
    collect,
    getOrder,
  };
};
