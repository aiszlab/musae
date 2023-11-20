import React from "react";
import { Picker } from "../picker";
import { Calendar } from "../calendar";
import dayjs from "dayjs";

const DatePicker = () => {
  return <Picker pickable={<Calendar value={dayjs()} />} picked={1} popupWidth={false} />;
};

export default DatePicker;
