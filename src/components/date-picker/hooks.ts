import { useControlledState } from "@aiszlab/relax";
import type { DatePickerProps } from "../../types/date-picker";
import { type RefObject, useCallback } from "react";
import type { PickerRef } from "../../types/picker";

/**
 * @description
 * value
 */
export const useValue = ([_value, _change, _ref]: [
  DatePickerProps["value"],
  DatePickerProps["onChange"],
  RefObject<PickerRef>,
]) => {
  const [value, setValue] = useControlledState(_value);

  // change handler
  const onChange = useCallback<Required<DatePickerProps>["onChange"]>(
    (_value) => {
      setValue(_value);
      _change?.(_value);
      _ref.current?.close();
    },
    [_change, setValue, _ref],
  );

  return {
    value,
    onChange,
  };
};
