import React, { useMemo, useRef } from "react";
import { Picker, type PickerRef } from "../picker";
import { TimePickerProps } from "./types";
import clsx from "clsx";
import { useClassNames } from "../config";
import { ComponentToken, TimePickerClassToken } from "../../utils/class-name";
import Panel from "./panel";
import { useValue } from "./hooks";
import { stylex } from "@stylexjs/stylex";

const styles = stylex.create({
  input: {
    outline: "none",
    width: "100%",
  },
});

const TimePicker = ({ className, ...props }: TimePickerProps) => {
  const classNames = useClassNames(ComponentToken.TimePicker);
  const ref = useRef<PickerRef>(null);
  const { value, onChange } = useValue([props.value, ref]);

  /// picked date
  const picked = useMemo(() => {
    const { className, style } = stylex.props(styles.input);
    return (
      <input
        className={clsx(classNames[TimePickerClassToken.Input], className)}
        style={style}
        value={value.format("HH:mm:ss")}
        readOnly
      />
    );
  }, [value, classNames]);

  return (
    <Picker
      ref={ref}
      className={clsx(classNames[TimePickerClassToken.Picker], className)}
      pickable={<Panel value={value} onChange={onChange} />}
      picked={picked}
      popupWidth={false}
    />
  );
};

export default TimePicker;
