import React from "react";
import { withIcon } from "../../hoc";

const TimerOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.0051, 0) scale(1.1106)">
        <path d="M13.61 0H7.61V2H13.61V0Z" fill="currentColor" />
        <path
          d="M10.61 5C14.48 5 17.61 8.13 17.61 12C17.61 12.94 17.42 13.83 17.09 14.65L18.59 16.15C19.24 14.91 19.61 13.5 19.61 12C19.61 9.88 18.87 7.93 17.64 6.39L19.06 4.97C18.63 4.46 18.16 3.98 17.65 3.56L16.23 4.98C14.68 3.74 12.73 3 10.61 3C9.11 3 7.7 3.37 6.46 4.02L7.96 5.52C8.78 5.19 9.67 5 10.61 5Z"
          fill="currentColor"
        />
        <path d="M9.61 7.17L11.61 9.17V7H9.61V7.17Z" fill="currentColor" />
        <path
          d="M1.42 1.81L0 3.22L3.4 6.62C2.28 8.12 1.61 9.98 1.61 12C1.61 16.97 5.63 21 10.61 21C12.63 21 14.49 20.33 15.99 19.21L18.39 21.61L19.8 20.2L1.42 1.81ZM10.61 19C6.74 19 3.61 15.87 3.61 12C3.61 10.53 4.06 9.17 4.83 8.05L14.56 17.78C13.44 18.55 12.08 19 10.61 19Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default TimerOff;
