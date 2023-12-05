import { useControlledState } from "@aiszlab/relax";
import type { TimePickerProps } from "./types";
import dayjs from "dayjs";
import { useCallback } from "react";

/**
 * @description
 * value
 */
export const useValue = ([valueInProps]: [TimePickerProps["value"]]) => {
  const [value, setValue] = useControlledState(valueInProps!, { defaultState: dayjs() });

  const onChange = useCallback<Required<TimePickerProps>["onChange"]>(
    (value) => {
      setValue(value);
    },
    [setValue]
  );

  return {
    value,
    onChange,
  };
};
