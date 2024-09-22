import React, { useMemo, useRef } from "react";
import { Picker } from "../picker";
import { useValue } from "./hooks";
import { DateRangePickerProps } from "./types";
import { Calendar } from "../calendar";
import { SwapHoriz } from "musae/icons";
import { useClassNames } from "../../hooks/use-class-names";
import { DateRangePickerClassToken } from "../../utils/class-name";
import stylex from "@stylexjs/stylex";
import { clsx } from "@aiszlab/relax";
import { sizes, spacing } from "../theme/tokens.stylex";
import { ComponentToken } from "../../utils/component-token";

import type { PickerRef } from "musae/types/picker";

const styles = stylex.create({
  picker: {
    flex: 1,
    display: "flex",
    columnGap: spacing.small,
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
  const classNames = useClassNames(ComponentToken.DateRangePicker);

  // picked date
  const picked = useMemo(() => {
    const [from, to] = value;
    const styled = {
      picker: stylex.props(styles.picker),
      trigger: stylex.props(styles.trigger),
    };

    return (
      <div
        className={clsx(styled.picker.className, classNames[DateRangePickerClassToken.Picker])}
        style={styled.picker.style}
      >
        <span
          className={clsx(styled.trigger.className, classNames[DateRangePickerClassToken.Input])}
          style={styled.trigger.style}
        >
          {from?.format("YYYY-MM-DD")}
        </span>

        <SwapHoriz className={classNames[DateRangePickerClassToken.Separator]} />

        <span
          className={clsx(styled.trigger.className, classNames[DateRangePickerClassToken.Input])}
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
