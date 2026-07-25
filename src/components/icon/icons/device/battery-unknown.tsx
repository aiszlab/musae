import React from "react";
import { withIcon } from "../../hoc";

const BatteryUnknown = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(6, 0) scale(1.2)">
        <path
          d="M8.67 2H7V0H3V2H1.33C0.6 2 0 2.6 0 3.33V18.66C0 19.4 0.6 20 1.33 20H8.66C9.4 20 10 19.4 10 18.67V3.33C10 2.6 9.4 2 8.67 2ZM6 16H4V14H6V16ZM7.3 10.69C7.3 10.69 6.92 11.11 6.63 11.4C6.15 11.88 5.8 12.55 5.8 13H4.2C4.2 12.17 4.66 11.48 5.13 11L6.06 10.06C6.33 9.79 6.5 9.41 6.5 9C6.5 8.17 5.83 7.5 5 7.5C4.17 7.5 3.5 8.17 3.5 9H2C2 7.34 3.34 6 5 6C6.66 6 8 7.34 8 9C8 9.66 7.73 10.26 7.3 10.69Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BatteryUnknown;
