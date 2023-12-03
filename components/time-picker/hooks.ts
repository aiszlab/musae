import { useControlledState } from "@aiszlab/relax";
import { TimePickerProps } from "./types";
import dayjs from "dayjs";
import { useCallback } from "react";
import { ClockProps } from "../clock/types";

/**
 * @description
 * value
 */
export const useValue = ([valueInProps]: [TimePickerProps["value"]]) => {
  const [value, setValue] = useControlledState(valueInProps!, { defaultState: dayjs() });

  const onChange = useCallback<Required<ClockProps>["onChange"]>(
    (value) => {
      setValue(dayjs().hour(value[0]).minute(value[1]).second(value[2]));
    },
    [setValue]
  );

  return {
    value,
    onChange,
  };
};
