import React from "react";
import { withIcon } from "../../hoc";

const AirlineStops = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.1579) scale(1.2632)">
        <path
          d="M17 3.7C14.54 5.2 11.5 7.87 11 12H13V14H7V12H9C8.5 7.5 4.63 4 0 4V2C4.39 2 8.22 4.55 10 8.3C11.38 5.33 13.86 3.27 15.96 1.99L12 2V0H19V7H17V3.7Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AirlineStops;
