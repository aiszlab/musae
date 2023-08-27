import React from "react";
import { useIconProps } from "./hooks";
import { IconProps } from "./types";

const NavigateBefore = (props: IconProps) => {
  const iconProps = useIconProps(props);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconProps.size}
      height={iconProps.size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15.7049 7.41L14.2949 6L8.29492 12L14.2949 18L15.7049 16.59L11.1249 12L15.7049 7.41Z"
        fill={iconProps.color}
      />
    </svg>
  );
};

export default NavigateBefore;
