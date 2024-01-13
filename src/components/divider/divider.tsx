import { StyledDivider } from "./styled";
import { DividerProps } from "./types";
import React from "react";
import { useOffset } from "./hooks";
import { useClassNames } from "../config";
import { ComponentToken, DividerClassToken } from "../../utils/class-name";

const Divider = ({ align, children }: DividerProps) => {
  const classNames = useClassNames(ComponentToken.Divider);
  const offset = useOffset([align]);

  return (
    <StyledDivider className={classNames[DividerClassToken.Divider]} hasChildren={!!children} offset={offset}>
      {!!children && <span className={classNames[DividerClassToken.Content]}>{children}</span>}
    </StyledDivider>
  );
};

export default Divider;
