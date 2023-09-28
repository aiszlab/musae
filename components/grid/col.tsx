import React, { useMemo } from "react";
import { StyledColWrapper } from "./styled";
import type { ColProps } from "./types";

const Col = (props: ColProps) => {
  /// span
  const span = useMemo(() => props.span ?? 8, [props.span]);

  return <StyledColWrapper span={span}>{props.children}</StyledColWrapper>;
};

export default Col;
