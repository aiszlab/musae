import React from "react";
import { withIcon } from "../../hoc";

const FlightClass = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.8235, 0) scale(1.4118)">
        <path
          d="M11 0H9C7.9 0 7 0.9 7 2V7C7 8.1 7.9 9 9 9H11C12.1 9 13 8.1 13 7V2C13 0.9 12.1 0 11 0ZM11 7H9V2H11V7ZM4.5 12H13V14H4.49C3.61 14 2.83 13.42 2.57 12.57L0 4V0H2V4L4.5 12ZM3 15H13V17H3V15Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FlightClass;
