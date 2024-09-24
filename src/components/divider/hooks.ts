import { useMemo } from "react";
import type { Align } from "musae/types/divider";

const OFFSET = new Map<Align, 5 | 50 | 95>([
  ["center", 50],
  ["left", 5],
  ["right", 95],
]);

interface UseOffsetProps {
  align: Align;
}

/**
 * @description
 * offset for children
 */
export const useOffset = ({ align }: UseOffsetProps) => {
  return useMemo(() => {
    return OFFSET.get(align) ?? 50;
  }, [align]);
};
