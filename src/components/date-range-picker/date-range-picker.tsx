import styles from "./styles";
import React from "react";
import { Picker } from "../picker";
import { useDateRangeState } from "./hooks/use-date-range-state";
import type { DateRangePickerProps } from "../../types/date-range-picker";
import { Calendar } from "../calendar";
import { IconSwapHoriz } from "../icon/icons";
import { useClassNames } from "../../hooks/use-class-names";
import { props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { CLASS_NAMES } from "./context";
import { Input } from "../input";
import type { InputRef } from "../../types/input";

const DateRangePicker = ({ onChange, ...props }: DateRangePickerProps) => {
  const { value, change } = useDateRangeState(props.value, { onChange });
  const classNames = useClassNames(CLASS_NAMES);

  const [from, to] = value;

  const styled = {
    picker: $props(styles.picker),
    trigger: $props(styles.trigger),
  };

  return (
    <Picker<InputRef>
      pickable={({ close }) => (
        <Calendar
          value={value}
          onClick={(value) => {
            change(value, close);
          }}
        />
      )}
      popupWidth={false}
    >
      {({ close, toggle, triggerRef }) => (
        <div
          className={stringify(classNames.picker, styled.picker.className)}
          style={styled.picker.style}
        >
          <Input
            ref={triggerRef}
            className={stringify(classNames.input, styled.trigger.className)}
            style={styled.trigger.style}
            value={from?.format("YYYY-MM-DD") ?? ""}
            onBlur={close}
            onClick={toggle}
            onInputorClick={toggle}
            readOnly
            trailing={
              <>
                <IconSwapHoriz className={classNames.separator} />
                <span
                  className={stringify(classNames.input, styled.trigger.className)}
                  style={styled.trigger.style}
                >
                  {to?.format("YYYY-MM-DD")}
                </span>
              </>
            }
          />
        </div>
      )}
    </Picker>
  );
};

export default DateRangePicker;
