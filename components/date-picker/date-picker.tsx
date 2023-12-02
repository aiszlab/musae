import React, { useMemo, useRef } from "react";
import { Picker, PickerRef } from "../picker";
import { Calendar } from "../calendar";
import type { DatePickerProps } from "./types";
import { useValue } from "./hooks";
import { StyledInput } from "./styled";
import { useClassNames } from "../config";
import { ComponentToken, DatePickerClassToken } from "../../utils/class-name";

const DatePicker = (props: DatePickerProps) => {
  const ref = useRef<PickerRef>(null);
  const { onChange, value } = useValue([props.value, props.onChange, ref]);
  const classNames = useClassNames(ComponentToken.DatePicker);

  /// picked date
  const picked = useMemo(() => {
    return (
      <StyledInput
        className={classNames[DatePickerClassToken.Input]}
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
      picked={picked}
      popupWidth={false}
    />
  );
};

export default DatePicker;
