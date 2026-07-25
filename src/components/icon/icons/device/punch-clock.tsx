import React from "react";
import { withIcon } from "../../hoc";

const PunchClock = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.7143, 0) scale(1.1429)">
        <path
          d="M16 5H15V0H3V5H2C0.9 5 0 5.9 0 7V19C0 20.1 0.9 21 2 21H16C17.1 21 18 20.1 18 19V7C18 5.9 17.1 5 16 5ZM5 2H13V5H5V2ZM16 19H2V7H16V19Z"
          fill="currentColor"
        />
        <path
          d="M9 8C6.24 8 4 10.24 4 13C4 15.76 6.24 18 9 18C11.76 18 14 15.76 14 13C14 10.24 11.76 8 9 8ZM9 16.5C7.07 16.5 5.5 14.93 5.5 13C5.5 11.07 7.07 9.5 9 9.5C10.93 9.5 12.5 11.07 12.5 13C12.5 14.93 10.93 16.5 9 16.5Z"
          fill="currentColor"
        />
        <path d="M9.5 10.5H8.5V13.21L10.14 14.85L10.85 14.14L9.5 12.79V10.5Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default PunchClock;
