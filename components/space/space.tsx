import React from "react";
import type { SpaceProps } from "./types";
import { StyledWrapper } from "./styled";

const Space = (props: SpaceProps) => {
  return <StyledWrapper>{props.children}</StyledWrapper>;
};

export default Space;
