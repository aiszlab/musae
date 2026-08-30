import { useControlledState } from "@aiszlab/relax";
import type { TimePickerProps } from "../../types/time-picker";
import dayjs, { type Dayjs } from "dayjs";
import { useCallback } from "react";

/**
 * @zh 管理时间选择值
 * @en Manage the selected time value
 */
export const useValue = ([valueInProps]: [TimePickerProps["value"]]) => {
  const [value, setValue] = useControlledState<Dayjs>(valueInProps, { defaultState: dayjs() });

  const onChange = useCallback<Required<TimePickerProps>["onChange"]>(
    (value) => {
      setValue(value);
    },
    [setValue],
  );

  return {
    value,
    onChange,
  };
};
