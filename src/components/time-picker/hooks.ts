import { useControlledState } from "@aiszlab/relax";
import type { TimePickerProps } from "../../types/time-picker";
import dayjs from "dayjs";
import { type RefObject, useCallback } from "react";
import type { PickerRef } from "../../types/picker";
import type { Nullable } from "@aiszlab/relax/types";

/**
 * @description
 * value
 */
export const useValue = ([valueInProps, pickerRef]: [
  TimePickerProps["value"],
  RefObject<Nullable<PickerRef>>,
]) => {
  const [value, setValue] = useControlledState(valueInProps, { defaultState: dayjs() });

  const onChange = useCallback<Required<TimePickerProps>["onChange"]>(
    (value) => {
      setValue(value);
      pickerRef.current?.close();
    },
    [setValue, pickerRef],
  );

  return {
    value,
    onChange,
  };
};
