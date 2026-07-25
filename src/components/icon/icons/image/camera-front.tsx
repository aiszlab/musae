import React from "react";
import { withIcon } from "../../hoc";

const CameraFront = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(5, 0) scale(1)">
        <path
          d="M0 20V22H5V24L8 21L5 18V20H0ZM9 20H14V22H9V20ZM6.99 8C8.1 8 9 7.1 9 6C9 4.9 8.1 4 6.99 4C5.88 4 5 4.9 5 6C5 7.1 5.89 8 6.99 8ZM12 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H12C13.1 18 14 17.1 14 16V2C14 0.9 13.1 0 12 0ZM12 16H2V14H12V16ZM12 12.5C12 10.83 8.67 10 7 10C5.33 10 2 10.83 2 12.5V2H12V12.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CameraFront;
