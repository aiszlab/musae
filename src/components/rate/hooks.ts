import { useControlledState, useEvent } from "@aiszlab/relax";
import { useMemo } from "react";
import { RateProps } from "./types";

/**
 * @description
 * value hooks
 */
export const useValue = ({
  partialable,
  ...props
}: Pick<RateProps, "value" | "onChange"> & {
  partialable: boolean;
}) => {
  const [_value, setValue] = useControlledState(props.value!, { defaultState: 0 });

  /// convert value into valid number like `0` `0.5` `1.5` `2`
  const value = useMemo(() => {
    if (!partialable) return Math.floor(_value);
    return Math.floor(_value * 2) / 2;
  }, [_value, partialable]);

  /// change handler
  const change = useEvent((changed: number) => {
    setValue(changed);
    props.onChange?.(changed);
  });

  return {
    value,
    change,
  };
};
