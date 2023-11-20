import React from "react";
import { Picker } from "../picker";
import { Calendar } from "../calendar";

const DatePicker = () => {
  return <Picker pickable={<Calendar />} picked={1} popupWidth={false} />;
};

export default DatePicker;
