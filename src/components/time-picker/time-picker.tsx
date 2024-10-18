import React, { useMemo, useRef } from "react";
import { Picker } from "../picker";
import type { PanelRef, TimePickerProps } from "musae/types/time-picker";
import { useClassNames } from "../../hooks/use-class-names";
import { TimePickerClassToken } from "../../utils/class-name";
import Panel from "./panel";
import { useValue } from "./hooks";
import stylex from "@stylexjs/stylex";
import { useEvent, clsx } from "@aiszlab/relax";
import { styles as inputStyles } from "../input";
import type { PickerRef } from "musae/types/picker";

const TimePicker = ({ className, ...props }: TimePickerProps) => {
  const classNames = useClassNames("time-picker");
  const pickerRef = useRef<PickerRef>(null);
  const panelRef = useRef<PanelRef>(null);
  const { value, onChange } = useValue([props.value, pickerRef]);

  /// picked date
  const picked = useMemo(() => {
    const { className, style } = stylex.props(inputStyles.input);

    return (
      <input
        className={clsx(classNames[TimePickerClassToken.Input], className)}
        style={style}
        value={value.format("HH:mm:ss")}
        readOnly
      />
    );
  }, [value, classNames]);

  const popperEntered = useEvent(async () => {
    panelRef.current?.reset();
  });

  return (
    <Picker
      ref={pickerRef}
      className={clsx(classNames[TimePickerClassToken.Picker], className)}
      pickable={<Panel value={value} onChange={onChange} ref={panelRef} />}
      popupWidth={false}
      onPopperEntered={popperEntered}
    >
      {picked}
    </Picker>
  );
};

export default TimePicker;
