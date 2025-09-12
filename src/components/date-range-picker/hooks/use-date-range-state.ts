import { type Dayjs } from "dayjs";
import { RefObject } from "react";
import { PickerRef } from "../../../types/picker";
import { DateRangePickerProps } from "../../../types/date-range-picker";
import { useControlledState, useEvent } from "@aiszlab/relax";
import { Nullable } from "@aiszlab/relax/types";

interface Props {
  onChange?: (value: [Dayjs, Dayjs]) => void;
  pickerRef: RefObject<Nullable<PickerRef>>;
}

/**
 * @description component state
 */
export const useDateRangeState = (
  controlledState: DateRangePickerProps["value"],
  { pickerRef, onChange }: Props,
) => {
  const [value, setValue] = useControlledState(controlledState, {
    defaultState: [void 0, void 0],
  });

  const change = useEvent((_value: Dayjs) => {
    // click first time
    if (new Set([0, 2]).has(value.filter((_value) => !!_value)?.length ?? 0)) {
      setValue([_value, void 0]);
      return;
    }

    // click twice
    const _range: [Dayjs, Dayjs] = [value[0]!, _value];
    setValue(_range);
    onChange?.(_range);
    pickerRef.current?.close();
  });

  return {
    value,
    change,
  };
};
