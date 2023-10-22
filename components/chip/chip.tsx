import React from "react";
import type { ChipProps } from "./types";
import { StyledSpan } from "./styled";
import { useClassNames } from "./hooks";

const Chip = ({ children, size = "large" }: ChipProps) => {
  const classNames = useClassNames();

  return (
    <StyledSpan size={size} className={classNames.chip}>
      {children}
    </StyledSpan>
  );
};

export default Chip;
