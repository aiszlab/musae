import { useControlledState, useEvent } from "@aiszlab/relax";
import { useMemo, useState } from "react";
import type { RateProps } from "../../types/rate";

/**
 * @description
 * value hooks
 */
export const useValue = ({
  halfable,
  ...props
}: Pick<RateProps, "value" | "onChange"> & {
  halfable: boolean;
}) => {
  const [_value, setValue] = useControlledState(props.value, { defaultState: 0 });

  // convert value into valid number like `0` `0.5` `1.5` `2`
  const value = useMemo(() => {
    if (!halfable) return Math.floor(_value);
    return Math.floor(_value * 2) / 2;
  }, [_value, halfable]);

  // change handler
  const change = useEvent((changed: number) => {
    setValue(changed);
    props.onChange?.(changed);
  });

  return {
    value,
    change,
  };
};

/**
 * @description
 * star hover hooks
 */
export const useHover = () => {
  const [hovered, setHovered] = useState<number>();

  const enter = useEvent((at: number) => {
    setHovered(at);
  });

  const leave = useEvent(() => {
    setHovered(void 0);
  });

  return {
    hovered,
    enter,
    leave,
  };
};
