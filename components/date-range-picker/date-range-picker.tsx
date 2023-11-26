import React, { useMemo, useRef } from "react";
import { Picker, PickerRef } from "../picker";
import { useValue } from "./hooks";
import { DateRangePickerProps } from "./types";
import { Calendar } from "../calendar";
import { SwapHoriz } from "../icon";
import { StyledWrapper } from "./styled";
import { useClassNames } from "../config";
import { ComponentToken, DateRangePickerClassToken } from "../../utils/class-name";

const DateRangePicker = (props: DateRangePickerProps) => {
  const ref = useRef<PickerRef>(null);
  const { onChange, value } = useValue([props.value, props.onChange, ref]);
  const classNames = useClassNames(ComponentToken.DateRangePicker);

  /// picked date
  const picked = useMemo(() => {
    const [from, to] = value;

    return (
      <StyledWrapper className={classNames[DateRangePickerClassToken.Picker]}>
        <span className={classNames[DateRangePickerClassToken.Input]}>{from?.format("YYYY-MM-DD")}</span>
        <SwapHoriz className={classNames[DateRangePickerClassToken.Separator]} />
        <span className={classNames[DateRangePickerClassToken.Input]}>{to?.format("YYYY-MM-DD")}</span>
      </StyledWrapper>
    );
  }, [value, classNames]);

  return (
    <Picker ref={ref} pickable={<Calendar value={value} onClick={onChange} />} picked={picked} popupWidth={false} />
  );
};

export default DateRangePicker;
