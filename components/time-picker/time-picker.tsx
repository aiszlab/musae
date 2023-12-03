import React, { useMemo } from "react";
import { Picker } from "../picker";
import { TimePickerProps } from "./types";
import clsx from "clsx";
import { useClassNames } from "../config";
import { ComponentToken, TimePickerClassToken } from "../../utils/class-name";
import { StyledInput } from "./styled";
import Panel from "./panel";
import { useValue } from "./hooks";

const TimePicker = ({ className, ...props }: TimePickerProps) => {
  const classNames = useClassNames(ComponentToken.TimePicker);
  const { value, clockValue, onChange } = useValue([props.value]);

  /// picked date
  const picked = useMemo(() => {
    return <StyledInput className={classNames[TimePickerClassToken.Input]} value={value.format("HH:mm:ss")} readOnly />;
  }, [value, classNames]);

  return (
    <Picker
      className={clsx(classNames[TimePickerClassToken.Picker], className)}
      pickable={<Panel value={clockValue} />}
      picked={picked}
      popupWidth={false}
    />
  );
};

export default TimePicker;
