import React, { useMemo } from "react";
import { Picker } from "../picker";
import { TimePickerProps } from "./types";
import clsx from "clsx";
import { useClassNames } from "../config";
import { ComponentToken, TimePickerClassToken } from "../../utils/class-name";
import { StyledInput } from "./styled";
import Panel from "./panel";

const TimePicker = ({ className, value, ...props }: TimePickerProps) => {
  const classNames = useClassNames(ComponentToken.TimePicker);

  /// picked date
  const picked = useMemo(() => {
    return (
      <StyledInput
        className={classNames[TimePickerClassToken.Input]}
        value={value?.format("YYYY-MM-DD") ?? ""}
        readOnly
      />
    );
  }, [value, classNames]);

  return (
    <Picker
      className={clsx(classNames[TimePickerClassToken.Picker], className)}
      pickable={<Panel />}
      picked={picked}
      popupWidth={false}
    />
  );
};

export default TimePicker;
