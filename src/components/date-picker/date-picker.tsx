import React, { useRef } from "react";
import { Picker } from "../picker";
import { Calendar } from "../calendar";
import type { DatePickerProps } from "musae/types/date-picker";
import { useValue } from "./hooks";
import { useClassNames } from "../../hooks/use-class-names";
import { DatePickerClassToken } from "../../utils/class-name";
import stylex from "@stylexjs/stylex";
import { clsx } from "@aiszlab/relax";
import { spacing } from "../theme/tokens.stylex";
import { styles as inputStyles } from "../input";
import { ComponentToken } from "../../utils/component-token";

import type { PickerRef } from "musae/types/picker";

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
