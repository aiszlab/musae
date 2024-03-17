import { useEffect, useRef } from "react";
import { Gutters } from "../../hooks/use-gutters";

const isElement = (node: Node): node is HTMLElement => {
  return node.nodeType === Node.ELEMENT_NODE;
};

/**
 * @description
 * child render
 */
export const useRenderable = ({ columns, gutters }: { columns: number; gutters: Gutters }) => {
  const ref = useRef<HTMLDivElement>(null);
  const maxHeight = useRef<number>(0);
  const [colGap, rowGap] = gutters;

  useEffect(() => {
    const columnHeights = new Array(columns).fill(0);

    ref.current?.childNodes.forEach((node) => {
      if (!isElement(node)) return;

      const childHeight = (node.attributeStyleMap.get("height") as CSSUnitValue).value;
      const order = columnHeights.indexOf(Math.min(...columnHeights));
      // count
      columnHeights[order] = columnHeights[order] + (columnHeights[order] && rowGap) + childHeight;

      Object.assign(node.style, {
        width: `calc((100% - ${columns - 1} * ${colGap}px) / ${columns})`,
        order: order + 1,
      });
    });

    maxHeight.current = Math.max(...columnHeights);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gutters]);

  return {
    ref,
    maxHeight,
  };
};
