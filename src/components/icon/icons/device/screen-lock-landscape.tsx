import React from "react";
import { withIcon } from "../../hoc";

const ScreenLockLandscape = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4.3636) scale(1.0909)">
        <path
          d="M20 0H2C0.9 0 0 0.9 0 2V12C0 13.1 0.9 14 2 14H20C21.1 14 22 13.1 22 12V2C22 0.9 21.1 0 20 0ZM18 12H4V2H18V12ZM9 11H13C13.55 11 14 10.55 14 10V7C14 6.45 13.55 6 13 6V5C13 3.89 12.1 3 11 3C9.89 3 9 3.9 9 5V6C8.45 6 8 6.45 8 7V10C8 10.55 8.45 11 9 11ZM9.8 5C9.8 4.34 10.34 3.8 11 3.8C11.66 3.8 12.2 4.34 12.2 5V6H9.8V5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ScreenLockLandscape;
