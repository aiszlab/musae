import styles from "./styles";
import React, { useRef } from "react";
import { Picker } from "../picker";
import { Calendar } from "../calendar";
import type { DatePickerProps } from "../../types/date-picker";
import { useValue } from "./hooks";
import { useClassNames } from "../../hooks/use-class-names";
import { props as $props } from "@stylexjs/stylex";
import { Input } from "../input";
import { CLASS_NAMES } from "./context";
import type { CalendarRef } from "../../types/calendar";
import { useEvent } from "@aiszlab/relax";
import type { InputRef } from "../../types/input";

const DatePicker = (props: DatePickerProps) => {
  const { onChange, value } = useValue([props.value, props.onChange]);
  const classNames = useClassNames(CLASS_NAMES);
  const calendarRef = useRef<CalendarRef>(null);

  const styled = {
    calendar: $props(styles.calendar),
  };

  const reset = useEvent(() => {
    calendarRef.current?.reset();
  });

  return (
    <Picker<InputRef>
      pickable={({ close }) => (
        <Calendar
          ref={calendarRef}
          className={styled.calendar.className}
          style={styled.calendar.style}
          value={value}
          onClick={(value) => {
            onChange(value);
            close();
          }}
        />
      )}
      onPopperEnter={reset}
      popupWidth={false}
    >
      {({ close, toggle, triggerRef }) => (
        <Input
          ref={triggerRef}
          className={classNames.picker}
          value={value?.format("YYYY-MM-DD") ?? ""}
          onBlur={close}
          onClick={toggle}
          onInputorClick={toggle}
          readOnly
        />
      )}
    </Picker>
  );
};

export default DatePicker;
