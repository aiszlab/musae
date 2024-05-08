import { useMemo } from "react";
import { PopperProps } from "./types";

// TODO: replace into relax
const isNumber = (value: unknown): value is number => {
  return typeof value === "number";
};

/**
 * @description
 * offset converter
 */
export const useOffsets = ({ offset = 0 }: { offset: PopperProps["offset"] }) => {
  const mainAxis = isNumber(offset) ? offset : offset.mainAxis;
  const crossAxis = isNumber(offset) ? 0 : offset.crossAxis;
  const alignmentAxis = isNumber(offset) ? 0 : offset.alignmentAxis;

  return useMemo<Exclude<PopperProps["offset"], number | undefined>>(() => {
    return {
      mainAxis,
      crossAxis,
      alignmentAxis,
    };
  }, [mainAxis, crossAxis, alignmentAxis]);
};
