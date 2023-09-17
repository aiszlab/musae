import React, { useMemo } from "react";
import { StyledWrapper } from "./styled";
import type { ColProps } from "./types";

const Col = (props: ColProps) => {
  /// span
  const span = useMemo(() => props.span ?? 8, [props.span]);

  return <StyledWrapper span={span}>{props.children}</StyledWrapper>;
};

export default Col;
