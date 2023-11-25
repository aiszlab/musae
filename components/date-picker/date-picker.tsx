import React, { useMemo, useRef } from "react";
import { Picker, PickerRef } from "../picker";
import { Calendar } from "../calendar";
import type { DatePickerProps } from "./types";
import { useValue } from "./hooks";
import { StyledInput } from "./styled";

const DatePicker = (props: DatePickerProps) => {
  const ref = useRef<PickerRef>(null);
  const { onChange, value } = useValue([props.value, props.onChange, ref]);

  /// picked date
  const picked = useMemo(() => {
    return <StyledInput value={value?.format("YYYY-MM-DD") ?? ""} readOnly />;
  }, [value]);

  return (
    <Picker ref={ref} pickable={<Calendar value={value} onClick={onChange} />} picked={picked} popupWidth={false} />
  );
};

export default DatePicker;
