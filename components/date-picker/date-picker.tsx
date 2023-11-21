import React, { useMemo } from "react";
import { Picker } from "../picker";
import { Calendar } from "../calendar";
import dayjs from "dayjs";
import type { DatePickerProps } from "./types";

const DatePicker = (props: DatePickerProps) => {
  /// picked date
  const picked = useMemo(() => {
    return <input value={""} />;
  }, []);

  return <Picker pickable={<Calendar value={dayjs()} />} picked={1} popupWidth={false} />;
};

export default DatePicker;
