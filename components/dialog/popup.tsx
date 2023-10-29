import React from "react";
import type { PopupProps } from "./types";
import { StyledWrapper, StyledMask, StyledPanel } from "./styled";
import { useClassNames } from "./hooks";

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
      </StyledPanel>
    </StyledWrapper>
  );
};

export default Popup;
