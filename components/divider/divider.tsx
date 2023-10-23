import { useMemo } from "react";
import { StyledWrapper } from "./styled";
import { DividerProps } from "./types";
import React from "react";

const Divider = (props: DividerProps) => {
  const hasChildren = useMemo(() => !!props.children, [props.children]);

  return <StyledWrapper hasChildren={hasChildren}>{props.children}</StyledWrapper>;
};

export default Divider; 
