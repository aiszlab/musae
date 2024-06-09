import { useMemo } from "react";
import { PopperProps } from "./types";

/**
 * @description
 * offset converter
 */
export const useOffsets = ({ offset = 0 }: { offset: PopperProps["offset"] }) => {
  const mainAxis = typeof offset === "number" ? offset : offset.mainAxis;
  const crossAxis = typeof offset === "number" ? 0 : offset.crossAxis;
  const alignmentAxis = typeof offset === "number" ? null : offset.alignmentAxis;

  return useMemo<Exclude<PopperProps["offset"], number | undefined>>(() => {
    return {
      mainAxis: 8 + (mainAxis ?? 0),
      crossAxis,
      alignmentAxis,
    };
  }, [mainAxis, crossAxis, alignmentAxis]);
};
