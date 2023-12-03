import { useControlledState } from "@aiszlab/relax";
import { TimePickerProps } from "./types";
import dayjs from "dayjs";
import { useCallback, useMemo } from "react";
import { ClockProps } from "../clock/types";

/**
 * @description
 * value
 */
export const useValue = ([valueInProps]: [TimePickerProps["value"]]) => {
  const [value, setValue] = useControlledState(valueInProps!, { defaultState: dayjs() });

  const clockValue = useMemo<Required<ClockProps>["value"]>(() => {
    return [value.hour(), value.minute(), value.second()];
  }, [value]);

  console.log("value====", value);

  const onChange = useCallback<Required<ClockProps>["onChange"]>(
    (value) => {
      setValue(dayjs().hour(value[0]).minute(value[1]).second(value[2]));
    },
    [setValue]
  );

  return {
    value,
    clockValue,
    onChange,
  };
};
