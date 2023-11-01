import React from "react";
import type { PopupProps } from "./types";
import { StyledWrapper, StyledMask, StyledPanel } from "./styled";
import { useClassNames, useFooter } from "./hooks";

const Popup = ({ onCancel, ...props }: PopupProps) => {
  const classNames = useClassNames();
  const footer = useFooter([props.footer, props.onConfirm, onCancel]);

  return (
    <StyledWrapper>
      {/* mask */}
      <StyledMask className={classNames.mask} onClick={onCancel} />

      {/* panel */}
      <StyledPanel className={classNames.panel}>
        <div className={classNames.header}></div>
        <div className={classNames.body}>{props.children}</div>
        <div className={classNames.footer}>{footer}</div>
      </StyledPanel>
    </StyledWrapper>
  );
};

export default Popup;
