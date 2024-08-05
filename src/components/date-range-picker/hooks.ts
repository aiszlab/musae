import { useControlledState } from "@aiszlab/relax";
import type { DateRangePickerProps } from "./types";
import { type RefObject, useCallback } from "react";
import { Dayjs } from "dayjs";
import { type PickerRef } from "../picker";

/**
 * @description
 * value
 */
export const useValue = ([_value, _change, ref]: [
  DateRangePickerProps["value"],
  DateRangePickerProps["onChange"],
  RefObject<PickerRef>,
]) => {
  const [value, setValue] = useControlledState(_value!, {
    defaultState: [void 0, void 0],
  });

  const onChange = useCallback(
    (_value: Dayjs) => {
      // click first time
      if (new Set([0, 2]).has(value.filter((_value) => !!_value)?.length ?? 0)) {
        setValue([_value, void 0]);
        return;
      }

      // click twice
      const _range: [Dayjs, Dayjs] = [value[0]!, _value];
      setValue(_range);
      _change?.(_range);
      ref.current?.close();
    },
    [value, setValue, _change, ref],
  );

  return {
    value,
    onChange,
  };
};
