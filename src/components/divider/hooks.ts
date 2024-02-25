import { useMemo } from "react";
import { Align } from "./types";
import type { Partialable } from "@aiszlab/relax/types";

const OFFSET = new Map<Align, 5 | 50 | 95>([
  ["center", 50],
  ["left", 5],
  ["right", 95],
]);

/**
 * @description
 * offset for children
 */
export const useOffset = ([align]: [align: Partialable<Align>]) => {
  return useMemo(() => {
    return OFFSET.get(align ?? "center") ?? 50;
  }, [align]);
};
