import { type Dayjs } from "dayjs";
import type { DateRangePickerProps } from "../../../types/date-range-picker";
import { useControlledState, useEvent } from "@aiszlab/relax";

interface Props {
  onChange?: (value: [Dayjs, Dayjs]) => void;
}

/**
 * @zh 管理日期范围选择状态
 * @en Manage the date range selection state
 */
export const useDateRangeState = (
  controlledState: DateRangePickerProps["value"],
  { onChange }: Props,
) => {
  const [value, setValue] = useControlledState<Exclude<typeof controlledState, undefined>>(
    controlledState,
    {
      defaultState: [void 0, void 0],
    },
  );

  const change = useEvent((_value: Dayjs, close: VoidFunction) => {
    // click first time
    if (new Set([0, 2]).has(value.filter((_value) => !!_value)?.length ?? 0)) {
      setValue([_value, void 0]);
      return;
    }

    // click twice
    const _range: [Dayjs, Dayjs] = [value[0]!, _value];
    setValue(_range);
    onChange?.(_range);
    close();
  });

  return {
    value,
    change,
  };
};
