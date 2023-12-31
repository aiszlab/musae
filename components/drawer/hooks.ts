import { type CSSProperties, useMemo } from "react";
import type { Placement } from "./types";

const PLACEMENT = new Map<Placement, [[initialPlacement: string, animatedPlacement: string], CSSProperties]>([
  [
    "right",
    [
      ["translateX(100%)", "translateX(0%)"],
      {
        right: 0,
        top: 0,
        bottom: 0,
      },
    ],
  ],
  [
    "left",
    [
      ["translateX(-100%)", "translateX(0%)"],
      {
        left: 0,
        top: 0,
        bottom: 0,
      },
    ],
  ],
  [
    "bottom",
    [
      ["translateY(100%)", "translateY(0%)"],
      {
        bottom: 0,
        left: 0,
        right: 0,
      },
    ],
  ],
  [
    "top",
    [
      ["translateY(-100%)", "translateY(0%)"],
      {
        top: 0,
        left: 0,
        right: 0,
      },
    ],
  ],
]);

/**
 * @description
 * placement
 */
export const usePlacements = ([placement]: [placement: Placement]) => {
  return useMemo(() => {
    return PLACEMENT.get(placement) || PLACEMENT.get("right")!;
  }, [placement]);
};
