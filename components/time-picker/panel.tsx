import React, { useContext, useEffect, useState } from "react";
import { Clock } from "../clock";
import { StyledPanel } from "./styled";
import { useClassNames } from "../config";
import { ComponentToken, TimePickerClassToken } from "../../utils/class-name";
import { Button } from "../button";
import { PanelProps } from "./types";
import Context from "../picker/context";
import { ClockProps } from "../clock/types";

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

  return (
    <StyledPanel className={classNames[TimePickerClassToken.Panel]}>
      <Clock value={value} />

      <div className={classNames[TimePickerClassToken.PanelFooter]}>
        <Button variant="text" size="small">
          此刻
        </Button>
        <Button variant="filled" size="small">
          确定
        </Button>
      </div>
    </StyledPanel>
  );
};

export default Panel;
