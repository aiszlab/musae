import styles from "./styles";
import React, { useRef } from "react";
import { Picker } from "../picker";
import { useDateRangeState } from "./hooks/use-date-range-state";
import type { DateRangePickerProps } from "../../types/date-range-picker";
import { Calendar } from "../calendar";
import { IconSwapHoriz } from "../icon/icons";
import { useClassNames } from "../../hooks/use-class-names";
import { props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import type { PickerRef } from "../../types/picker";
import { CLASS_NAMES } from "./context";
import { Input } from "../input";

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
      {({ inputProps }) => (
        <Input
          {...inputProps}
          className={stringify(classNames.picker, styled.picker.className)}
          style={styled.picker.style}
          inputClassName={stringify(classNames.input, styled.trigger.className)}
          inputStyle={styled.trigger.style}
          value={from?.format("YYYY-MM-DD") ?? ""}
          readOnly
          trailing={
            <>
              <IconSwapHoriz className={classNames.separator} />
              <span
                className={stringify(classNames.input, styled.trigger.className)}
                style={styled.trigger.style}
              >
                {to?.format("YYYY-MM-DD")}
              </span>
            </>
          }
        />
      )}
    </Picker>
  );
};

export default DateRangePicker;
