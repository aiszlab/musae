import React from "react";
import { withIcon } from "../../hoc";

const ScreenLockPortrait = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(4.3636, 0) scale(1.0909)">
        <path
          d="M5 15H9C9.55 15 10 14.55 10 14V11C10 10.45 9.55 10 9 10V9C9 7.89 8.1 7 7 7C5.89 7 5 7.9 5 9V10C4.45 10 4 10.45 4 11V14C4 14.55 4.45 15 5 15ZM5.8 9C5.8 8.34 6.34 7.8 7 7.8C7.66 7.8 8.2 8.34 8.2 9V10H5.8V9ZM12 0H2C0.9 0 0 0.9 0 2V20C0 21.1 0.9 22 2 22H12C13.1 22 14 21.1 14 20V2C14 0.9 13.1 0 12 0ZM12 18H2V4H12V18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ScreenLockPortrait;
