import { clamp, useMount } from "@aiszlab/relax";
import { useMemo, useRef, useState } from "react";

/**
 * @description
 * count circle path
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
 * @description
 * use value
 */
export const useValue = ({ value: _value }: { value: number }) => {
  const value = useMemo(() => clamp(_value, 0, 100), [_value]);
  const isMax = useMemo(() => value === 100, [value]);

  return {
    value,
    isMax,
  };
};
