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
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M6.75 12.1274L3.6225 8.99988L2.5575 10.0574L6.75 14.2499L15.75 5.24988L14.6925 4.19238L6.75 12.1274Z"
        fill={iconProps.color}
      />
    </svg>
  );
};

export default NavigateBefore;
