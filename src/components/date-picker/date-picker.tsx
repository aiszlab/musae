import React, { useRef } from "react";
import { Picker, PickerRef } from "../picker";
import { Calendar } from "../calendar";
import type { DatePickerProps } from "./types";
import { useValue } from "./hooks";
import { useClassNames } from "../config";
import { ComponentToken, DatePickerClassToken } from "../../utils/class-name";
import * as stylex from "@stylexjs/stylex";
import clsx from "clsx";
import { spacing } from "../theme/tokens.stylex";
import { styles as inputStyles } from "../input";

const styles = stylex.create({
  calendar: {
    padding: spacing.xxsmall,
  },
});

const DatePicker = (props: DatePickerProps) => {
  const ref = useRef<PickerRef>(null);
  const { onChange, value } = useValue([props.value, props.onChange, ref]);
  const classNames = useClassNames(ComponentToken.DatePicker);

  const styled = {
    input: stylex.props(inputStyles.input),
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
        className={clsx(classNames[DatePickerClassToken.Input], styled.input.className)}
        style={styled.input.style}
        value={value?.format("YYYY-MM-DD") ?? ""}
        readOnly
      />
    </Picker>
  );
};

export default DatePicker;
