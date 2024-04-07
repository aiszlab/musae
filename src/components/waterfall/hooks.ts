import { useCallback, useEffect, useRef, useState } from "react";

/**
 * @description
 * repaint child
 */
export const useRepaint = ({ columns, rowGap }: { columns: number; rowGap: number }) => {
  const items = useRef<Map<number, HTMLDivElement | null>>(new Map());
  const [maxHeight, setMaxHeight] = useState(0);
  const [orders, setOrders] = useState<Map<number, number>>(new Map());

  const collect = useCallback((index: number, ref: HTMLDivElement | null) => {
    items.current.set(index, ref);
  }, []);

  useEffect(() => {
    // only 1 columns, no need to repaint, just display as flex
    if (columns <= 1) return;

    const [columnHeights, _orders] = Array.from(items.current.entries()).reduce<[number[], typeof orders]>(
      (prev, [index, child]) => {
        if (!child) return prev;

        const childHeight = child.getBoundingClientRect().height;
        const order = prev[0].indexOf(Math.min(...prev[0]));
        // count
        prev[0][order] = prev[0][order] + (prev[0][order] && rowGap) + childHeight;
        // set order for render
        prev[1].set(index, order + 1);
        return prev;
      },
      [new Array(columns).fill(0), new Map()]
    );

    setMaxHeight(Math.max(...columnHeights));
    setOrders(_orders);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowGap]);

  const getOrder = useCallback(
    (index: number) => {
      return orders.get(index) ?? null;
    },
    [orders]
  );

  return {
    maxHeight,
    collect,
    getOrder,
  };
};
