import React, { useMemo, useRef } from "react";
import { Picker } from "../picker";
import { useValue } from "./hooks";
import type { DateRangePickerProps } from "../../types/date-range-picker";
import { Calendar } from "../calendar";
import { SwapHoriz } from "musae/icons";
import { useClassNames } from "../../hooks/use-class-names";
import { $create, $props } from "../../utils/styles";
import { stringify } from "@aiszlab/relax/class-name";
import { sizes, spacing } from "../theme/tokens.stylex";
import type { PickerRef } from "../../types/picker";
import { CLASS_NAMES } from "./context";

const styles = $create({
  picker: {
    flex: 1,
    display: "flex",
    columnGap: spacing.xxsmall,
    alignItems: "center",
  },

  trigger: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "fit-content",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    minWidth: sizes.medium,
  },
});

const DateRangePicker = (props: DateRangePickerProps) => {
  const ref = useRef<PickerRef>(null);
  const { onChange, value } = useValue([props.value, props.onChange, ref]);
  const classNames = useClassNames(CLASS_NAMES);

  // picked date
  const picked = useMemo(() => {
    const [from, to] = value;
    const styled = {
      picker: $props(styles.picker),
      trigger: $props(styles.trigger),
    };

    return (
      <div
        className={stringify(styled.picker.className, classNames.picker)}
        style={styled.picker.style}
      >
        <span
          className={stringify(styled.trigger.className, classNames.input)}
          style={styled.trigger.style}
        >
          {from?.format("YYYY-MM-DD")}
        </span>

        <SwapHoriz className={classNames.separator} />

        <span
          className={stringify(styled.trigger.className, classNames.input)}
          style={styled.trigger.style}
        >
          {to?.format("YYYY-MM-DD")}
        </span>
      </div>
    );
  }, [value, classNames]);

  return (
    <Picker ref={ref} pickable={<Calendar value={value} onClick={onChange} />} popupWidth={false}>
      {picked}
    </Picker>
  );
};

export default DateRangePicker;
