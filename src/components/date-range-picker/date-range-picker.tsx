import React, { useRef } from "react";
import { Picker } from "../picker";
import { useDateRangeState } from "./hooks/use-date-range-state";
import type { DateRangePickerProps } from "../../types/date-range-picker";
import { Calendar } from "../calendar";
import { SwapHoriz } from "../icon/icons";
import { useClassNames } from "../../hooks/use-class-names";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { sizes, spacing } from "../theme/tokens.stylex";
import type { PickerRef } from "../../types/picker";
import { CLASS_NAMES } from "./context";

const styles = $create({
  picker: {
    flex: 1,
    display: "flex",
    columnGap: spacing.xxsmall,
    alignItems: "center",
    maxWidth: sizes.full,
  },

  trigger: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "fit-content",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    minWidth: sizes.medium,
  },
});

const DateRangePicker = ({ onChange, ...props }: DateRangePickerProps) => {
  const pickerRef = useRef<PickerRef>(null);
  const { value, change } = useDateRangeState(props.value, { pickerRef, onChange });
  const classNames = useClassNames(CLASS_NAMES);

  const [from, to] = value;

  const styled = {
    picker: $props(styles.picker),
    trigger: $props(styles.trigger),
  };

  return (
    <Picker
      ref={pickerRef}
      pickable={<Calendar value={value} onClick={change} />}
      popupWidth={false}
    >
      <div
        className={stringify(classNames.picker, styled.picker.className)}
        style={styled.picker.style}
      >
        <span
          className={stringify(classNames.input, styled.trigger.className)}
          style={styled.trigger.style}
        >
          {from?.format("YYYY-MM-DD")}
        </span>

        <SwapHoriz className={classNames.separator} />

        <span
          className={stringify(classNames.input, styled.trigger.className)}
          style={styled.trigger.style}
        >
          {to?.format("YYYY-MM-DD")}
        </span>
      </div>
    </Picker>
  );
};

export default DateRangePicker;
