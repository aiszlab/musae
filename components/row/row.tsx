import React from "react";
import type { RowProps } from "./types";
import { StyledWrapper } from "./styled";

const Row = (props: RowProps) => {
  return <StyledWrapper>{props.children}</StyledWrapper>;
};

export default Row;
