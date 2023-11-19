import { StyledWrapper } from "./styled";
import { DividerProps } from "./types";
import React, { useContext } from "react";
import { useOffset } from "./hooks";
import { Context } from "../config";
import { ComponentToken, DividerClassToken } from "../../utils/class-name";

const Divider = ({ align, children }: DividerProps) => {
  const classNames = useContext(Context).classNames[ComponentToken.Divider];
  const offset = useOffset([align]);

  return (
    <StyledWrapper className={classNames[DividerClassToken.Divider]} hasChildren={!!children} offset={offset}>
      {!!children && <span className={classNames[DividerClassToken.Content]}>{children}</span>}
    </StyledWrapper>
  );
};

export default Divider;
