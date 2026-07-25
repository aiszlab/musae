import React from "react";
import { withIcon } from "../../hoc";

const RollerShadesClosed = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.15) scale(1.2)">
        <path
          d="M18 16V0H2V16H0V18H8.25C8.25 18.97 9.03 19.75 10 19.75C10.97 19.75 11.75 18.97 11.75 18H20V16H18ZM16 2V12H4V2H16ZM4 16V14H9V16H4ZM11 16V14H16V16H11Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default RollerShadesClosed;
