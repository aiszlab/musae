import React, { useCallback, useContext, useEffect, useState } from "react";
import { Clock } from "../clock";
import { StyledPanel } from "./styled";
import { useClassNames } from "../config";
import { ComponentToken, TimePickerClassToken } from "../../utils/class-name";
import { Button } from "../button";
import { PanelProps } from "./types";
import Context from "../picker/context";
import { ClockProps } from "../clock/types";
import dayjs from "dayjs";

const Panel = (props: PanelProps) => {
  const classNames = useClassNames(ComponentToken.TimePicker);
  const { isVisible } = useContext(Context);
  const [value, setValue] = useState<ClockProps["value"]>();

  useEffect(() => {
    if (!isVisible || !props.value) {
      setValue(void 0);
      return;
    }
    setValue([props.value.hour(), props.value.minute(), props.value.second()]);
  }, [props.value, isVisible]);

  const change = useCallback<Required<ClockProps>["onChange"]>((value) => {
    setValue(value);
  }, []);

  const confirm = useCallback(() => {
    if (!value) return;
    props.onChange?.(dayjs().hour(value[0]).minute(value[1]).second(value[2]));
  }, [props, value]);

  const reset = useCallback(() => {
    const currentAt = dayjs();
    setValue([currentAt.hour(), currentAt.minute(), currentAt.second()]);
  }, []);

  return (
    <StyledPanel className={classNames[TimePickerClassToken.Panel]}>
      <Clock value={value} onChange={change} />

      <div className={classNames[TimePickerClassToken.PanelFooter]}>
        <Button variant="text" size="small" onClick={reset}>
          此刻
        </Button>
        <Button variant="filled" size="small" onClick={confirm} disabled={!value}>
          确定
        </Button>
      </div>
    </StyledPanel>
  );
};

export default Panel;
