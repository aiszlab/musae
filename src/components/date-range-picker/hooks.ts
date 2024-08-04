import { useControlledState } from "@aiszlab/relax";
import { DateRangePickerProps } from "./types";
import { RefObject, useCallback } from "react";
import { Dayjs } from "dayjs";
import { Partialable } from "@aiszlab/relax/types";
import { PickerRef } from "../picker";

/**
 * @description
 * value
 */
export const useValue = ([_value, _change, ref]: [
  DateRangePickerProps["value"],
  DateRangePickerProps["onChange"],
  RefObject<PickerRef>,
]) => {
  const [value, setValue] = useControlledState<[Partialable<Dayjs>, Partialable<Dayjs>]>(_value!, {
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
