import type { Placement } from "./types";

export const PLACEMENTS: Record<Placement, [initialPlacement: string, animatedPlacement: string]> = {
  right: ["translateX(100%)", "translateX(0%)"],
  left: ["translateX(-100%)", "translateX(0%)"],
  bottom: ["translateY(100%)", "translateY(0%)"],
  top: ["translateY(-100%)", "translateY(0%)"],
};
