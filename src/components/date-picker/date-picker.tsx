import React, { useRef } from "react";
import { Picker, PickerRef } from "../picker";
import { Calendar } from "../calendar";
import type { DatePickerProps } from "./types";
import { useValue } from "./hooks";
import { useClassNames } from "../config";
import { ComponentToken, DatePickerClassToken } from "../../utils/class-name";
import * as stylex from "@stylexjs/stylex";
import clsx from "clsx";
import { sizes, spacing } from "../theme/tokens.stylex";

const styles = stylex.create({
  trigger: {
    outline: "none",
    width: sizes.full,
  },

  calendar: {
    padding: spacing.xxsmall,
  },
});

const DatePicker = (props: DatePickerProps) => {
  const ref = useRef<PickerRef>(null);
  const { onChange, value } = useValue([props.value, props.onChange, ref]);
  const classNames = useClassNames(ComponentToken.DatePicker);

  const styled = {
    trigger: stylex.props(styles.trigger),
    calendar: stylex.props(styles.calendar),
  };

  return (
    <Picker
      ref={ref}
      className={classNames[DatePickerClassToken.Picker]}
      pickable={
        <Calendar
          className={styled.calendar.className}
          style={styled.calendar.style}
          value={value}
          onClick={onChange}
        />
      }
      popupWidth={false}
    >
      <input
        className={clsx(classNames[DatePickerClassToken.Input], styled.trigger.className)}
        style={styled.trigger.style}
        value={value?.format("YYYY-MM-DD") ?? ""}
        readOnly
      />
    </Picker>
  );
};

export default DatePicker;
