import React, { useRef } from "react";
import { Picker } from "../picker";
import type { PanelRef, TimePickerProps } from "../../types/time-picker";
import { useClassNames } from "../../hooks/use-class-names";
import Panel from "./panel";
import { useValue } from "./hooks";
import { useEvent } from "@aiszlab/relax";
import { Input } from "../input";
import { stringify } from "@aiszlab/relax/class-name";
import { CLASS_NAMES, Context } from "./context";
import type { InputRef } from "../../types/input";

const TimePicker = ({ className, ...props }: TimePickerProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const panelRef = useRef<PanelRef>(null);
  const { value, onChange } = useValue([props.value]);

  const popperEntered = useEvent(async () => {
    panelRef.current?.reset();
  });

  return (
    <Context.Provider value={{ classNames }}>
      <Picker<InputRef>
        pickable={({ close }) => (
          <Panel
            value={value}
            onChange={(value) => {
              onChange(value);
              close();
            }}
            ref={panelRef}
          />
        )}
        popupWidth={false}
        onPopperEntered={popperEntered}
      >
        {({ close, toggle, triggerRef }) => (
          <Input
            ref={triggerRef}
            className={stringify(classNames.picker, className)}
            value={value.format("HH:mm:ss")}
            onBlur={close}
            onClick={toggle}
            onInputorClick={toggle}
            readOnly
          />
        )}
      </Picker>
    </Context.Provider>
  );
};

export default TimePicker;
