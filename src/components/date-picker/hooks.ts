import { useControlledState } from "@aiszlab/relax";
import type { DatePickerProps } from "../../types/date-picker";
import { useCallback } from "react";

/**
 * @zh 管理日期选择值
 * @en Manage the selected date value
 */
export const useValue = ([_value, _change]: [
  DatePickerProps["value"],
  DatePickerProps["onChange"],
]) => {
  const [value, setValue] = useControlledState(_value);

  // change handler
  const onChange = useCallback<Required<DatePickerProps>["onChange"]>(
    (_value) => {
      setValue(_value);
      _change?.(_value);
    },
    [_change, setValue],
  );

  return {
    value,
    onChange,
  };
};
