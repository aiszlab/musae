import React from "react";
import type { PopupProps } from "./types";
import { StyledWrapper, StyledMask, StyledPanel } from "./styled";
import { useClassNames } from "./hooks";
import { Button } from "../button";
import Space from "../space/space";

const Popup = ({ onClose, ...props }: PopupProps) => {
  const classNames = useClassNames();

  return (
    <StyledWrapper>
      {/* mask */}
      <StyledMask className={classNames.mask} onClick={onClose} />

      {/* panel */}
      <StyledPanel className={classNames.panel}>
        <div className={classNames.header}></div>
        <div className={classNames.body}>{props.children}</div>
        <div className={classNames.footer}>
          <Space>
            <Button>确认</Button>
            <Button>取消</Button>
          </Space>
        </div>
      </StyledPanel>
    </StyledWrapper>
  );
};

export default Popup;
