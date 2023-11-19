import React, { useContext } from "react";
import { StyledSpan } from "./styled";
import clsx from "clsx";
import type { ChipProps } from "./types";
import { Context } from "../config";
import { ChipClassToken, ComponentToken } from "../../utils/class-name";

const Chip = ({ children, size = "large", ...props }: ChipProps) => {
  const classNames = useContext(Context).classNames[ComponentToken.Chip];

  return (
    <StyledSpan size={size} className={clsx([classNames[ChipClassToken.Chip], props.className])}>
      {children}
    </StyledSpan>
  );
};

export default Chip;
