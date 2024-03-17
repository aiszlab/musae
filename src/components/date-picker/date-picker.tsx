import React, { useMemo, useRef } from "react";
import { Picker, PickerRef } from "../picker";
import { Calendar } from "../calendar";
import type { DatePickerProps } from "./types";
import { useValue } from "./hooks";
import { useClassNames } from "../config";
import { ComponentToken, DatePickerClassToken } from "../../utils/class-name";
import * as stylex from "@stylexjs/stylex";
import clsx from "clsx";

const styles = stylex.create({
  trigger: {
    outline: "none",
    width: "100%",
  },
});

const DatePicker = (props: DatePickerProps) => {
  const ref = useRef<PickerRef>(null);
  const { onChange, value } = useValue([props.value, props.onChange, ref]);
  const classNames = useClassNames(ComponentToken.DatePicker);

  /// picked date
  const picked = useMemo(() => {
    const styled = stylex.props(styles.trigger);

    return (
      <input
        className={clsx(styled.className, classNames[DatePickerClassToken.Input])}
        style={styled.style}
        value={value?.format("YYYY-MM-DD") ?? ""}
        readOnly
      />
    );
  }, [value, classNames]);

  return (
    <Picker
      ref={ref}
      className={classNames[DatePickerClassToken.Picker]}
      pickable={<Calendar value={value} onClick={onChange} />}
      popupWidth={false}
    >
      {picked}
    </Picker>
  );
};

export default DatePicker;
