import React from "react";
import { Clock } from "../clock";
import { StyledPanel } from "./styled";
import { useClassNames } from "../config";
import { ComponentToken, TimePickerClassToken } from "../../utils/class-name";
import { Button } from "../button";

const Panel = () => {
  const classNames = useClassNames(ComponentToken.TimePicker);

  return (
    <StyledPanel className={classNames[TimePickerClassToken.Panel]}>
      <Clock />
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
