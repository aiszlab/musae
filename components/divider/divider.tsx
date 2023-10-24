import { StyledWrapper } from "./styled";
import { DividerProps } from "./types";
import React from "react";
import { useClassNames, useOffset } from "./hooks";

const Divider = ({ align, children }: DividerProps) => {
  const classNames = useClassNames();
  const offset = useOffset([align]);

  return (
    <StyledWrapper className={classNames.divider} hasChildren={!!children} offset={offset}>
      {!!children && <span className={classNames.content}>{children}</span>}
    </StyledWrapper>
  );
};

export default Divider;
