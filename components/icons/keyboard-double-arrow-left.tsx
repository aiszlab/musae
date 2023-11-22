import React from "react";
import { useIconProps } from "./hooks";
import { IconProps } from "./types";
import { StyledWrapper } from "./styled";

const KeyboardDoubleArrowLeft = (props: IconProps) => {
  const iconProps = useIconProps(props);

  return (
    <StyledWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconProps.size}
        height={iconProps.size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M17.59 18L19 16.59L14.42 12L19 7.41L17.59 6L11.59 12L17.59 18Z" fill={iconProps.color} />
        <path d="M11 18L12.41 16.59L7.83 12L12.41 7.41L11 6L5 12L11 18Z" fill={iconProps.color} />
      </svg>
    </StyledWrapper>
  );
};

export default KeyboardDoubleArrowLeft;
