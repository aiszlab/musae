import React from "react";
import { StyledSpan } from "./styled";
import { useClassNames } from "./hooks";
import clsx from "clsx";
import type { ChipProps } from "./types";

const Chip = ({ children, size = "large", ...props }: ChipProps) => {
  const classNames = useClassNames();

  return (
    <StyledSpan size={size} className={clsx([classNames.chip, props.className])}>
      {children}
    </StyledSpan>
  );
};

export default Chip;
