import React from "react";
import { withIcon } from "../../hoc";

const SmartScreen = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4.3636) scale(1.0909)">
        <path d="M13 6.25H11.5V7.75H13V6.25Z" fill="currentColor" />
        <path d="M15.5 6.25H14V7.75H15.5V6.25Z" fill="currentColor" />
        <path d="M10.5 6.25H9V7.75H10.5V6.25Z" fill="currentColor" />
        <path d="M8 6.25H6.5V7.75H8V6.25Z" fill="currentColor" />
        <path
          d="M20 0H2C0.9 0 0 0.9 0 2V12C0 13.1 0.9 14 2 14H20C21.1 14 22 13.1 22 12V2C22 0.9 21.1 0 20 0ZM3 12H2V2H3V12ZM17 12H5V2H17V12ZM20 12H19V2H20V12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SmartScreen;
