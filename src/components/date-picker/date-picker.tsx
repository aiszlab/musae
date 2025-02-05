import React, { useRef } from "react";
import { Picker } from "../picker";
import { Calendar } from "../calendar";
import type { DatePickerProps } from "../../types/date-picker";
import { useValue } from "./hooks";
import { useClassNames } from "../../hooks/use-class-names.component";
import stylex from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { spacing } from "../theme/tokens.stylex";
import { styles as inputStyles } from "../input";
import type { PickerRef } from "../../types/picker";
import { CLASS_NAMES } from "./context";
import type { CalendarRef } from "../../types/calendar";
import { useEvent } from "@aiszlab/relax";

const styles = stylex.create({
  calendar: {
    padding: spacing.xxxxxsmall,
  },
});

const DatePicker = (props: DatePickerProps) => {
  const ref = useRef<PickerRef>(null);
  const { onChange, value } = useValue([props.value, props.onChange, ref]);
  const classNames = useClassNames(CLASS_NAMES);
  const calendarRef = useRef<CalendarRef>(null);

  const styled = {
    input: stylex.props(inputStyles.input),
    calendar: stylex.props(styles.calendar),
  };

  const reset = useEvent(() => {
    calendarRef.current?.reset();
  });

  return (
    <Picker
      ref={ref}
      className={classNames.picker}
      pickable={
        <Calendar
          ref={calendarRef}
          className={styled.calendar.className}
          style={styled.calendar.style}
          value={value}
          onClick={onChange}
        />
      }
      onPopperEnter={reset}
      popupWidth={false}
    >
      <input
        className={stringify(classNames.input, styled.input.className)}
        style={styled.input.style}
        value={value?.format("YYYY-MM-DD") ?? ""}
        readOnly
      />
    </Picker>
  );
};

export default DatePicker;
