import { useMount } from "@aiszlab/relax";
import { useMemo, useRef, useState } from "react";

/**
 * @zh 计算圆形进度弧长与偏移量。
 * @en Calculate the circular progress arc length and offset.
 */
export const useCircular = ({ value }: { value: number }) => {
  const [segmentPerimeter, setSegmentPerimeter] = useState(0);
  const segmentRef = useRef<SVGCircleElement>(null);

  useMount(() => {
    setSegmentPerimeter(segmentRef.current?.getTotalLength() ?? 0);
  });

  const segmentOffset = useMemo(() => {
    return ((100 - value) / 100) * segmentPerimeter;
  }, [segmentPerimeter, value]);

  return {
    segmentPerimeter,
    segmentOffset,
    segmentRef,
  };
};

/**
 * @zh 将当前值限制在有效范围，并计算百分比。
 * @en Clamp the current value to its range and calculate its percentage.
 */
export const useValue = ({ value, min, max }: { value: number; min: number; max: number }) => {
  const safeMax = Math.max(min, max);
  const clampedValue = Math.min(Math.max(value, min), safeMax);
  const percentage = safeMax === min ? 0 : ((clampedValue - min) / (safeMax - min)) * 100;

  return {
    value: clampedValue,
    percentage,
  };
};
