import React, { useMemo, useRef } from "react";
import { Picker } from "../picker";
import type { PanelRef, TimePickerProps } from "../../types/time-picker";
import { useClassNames } from "../../hooks/use-class-names";
import Panel from "./panel";
import { useValue } from "./hooks";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { useEvent } from "@aiszlab/relax";
import { styles as inputStyles } from "../input";
import type { PickerRef } from "../../types/picker";
import { stringify } from "@aiszlab/relax/class-name";
import { CLASS_NAMES, Context } from "./context";

const TimePicker = ({ className, ...props }: TimePickerProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const pickerRef = useRef<PickerRef>(null);
  const panelRef = useRef<PanelRef>(null);
  const { value, onChange } = useValue([props.value, pickerRef]);

  // picked date
  const picked = useMemo(() => {
    const { className, style } = $props(inputStyles.input);

    return (
      <input
        className={stringify(classNames.input, className)}
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
    <Context.Provider value={{ classNames }}>
      <Picker
        ref={pickerRef}
        className={stringify(classNames.picker, className)}
        pickable={<Panel value={value} onChange={onChange} ref={panelRef} />}
        popupWidth={false}
        onPopperEntered={popperEntered}
      >
        {picked}
      </Picker>
    </Context.Provider>
  );
};

export default TimePicker;
