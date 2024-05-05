import { useMemo } from "react";
import { TourProps } from "./types";
import { isArray } from "@aiszlab/relax";

/**
 * @description
 * offset
 */
export const useOffsets = (props: Required<Pick<TourProps, "offset">>) => {
  const offsets = useMemo<[number, number]>(() => {
    if (isArray(props.offset)) return props.offset;
    return [props.offset * -1, props.offset];
  }, [props.offset]);

  const spacings = useMemo<[number, number]>(() => {
    return [offsets[0] * -1, offsets[1]];
  }, [offsets]);

  return {
    spacings,
    offsets,
  };
};
