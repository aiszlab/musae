import React, { useRef } from "react";
import { Picker } from "../picker";
import type { PanelRef, TimePickerProps } from "../../types/time-picker";
import { useClassNames } from "../../hooks/use-class-names";
import Panel from "./panel";
import { useValue } from "./hooks";
import { useEvent } from "@aiszlab/relax";
import { Input } from "../input";
import type { PickerRef } from "../../types/picker";
import { stringify } from "@aiszlab/relax/class-name";
import { CLASS_NAMES, Context } from "./context";

const TimePicker = ({ className, ...props }: TimePickerProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const pickerRef = useRef<PickerRef>(null);
  const panelRef = useRef<PanelRef>(null);
  const { value, onChange } = useValue([props.value, pickerRef]);

  const popperEntered = useEvent(async () => {
    panelRef.current?.reset();
  });

  return (
    <Context.Provider value={{ classNames }}>
      <Picker
        ref={pickerRef}
        className={stringify(classNames.picker, className)}
        pickable={<Panel value={value} onChange={onChange} ref={panelRef} />}
        popupWidth={false}
        onPopperEntered={popperEntered}
      >
        {({ inputProps }) => (
          <Input
            {...inputProps}
            inputClassName={classNames.input}
            value={value.format("HH:mm:ss")}
            readOnly
          />
        )}
      </Picker>
    </Context.Provider>
  );
};

export default TimePicker;
