import React from "react";
import { withIcon } from "../../hoc";

const WatchOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(4, 0) scale(1)">
        <path
          d="M10.31 2L10.72 4.48C9.87 4.17 8.96 4 8 4C7.05 4 6.13 4.17 5.29 4.47L5.7 2H10.31ZM10.72 19.52L10.31 22H5.7L5.29 19.53C6.13 19.83 7.05 20 8 20C8.96 20 9.87 19.83 10.72 19.52ZM12 0H4L3.05 5.73C1.19 7.19 0 9.45 0 12C0 14.55 1.19 16.81 3.05 18.27L4 24H12L12.96 18.27C14.81 16.81 16 14.54 16 12C16 9.46 14.81 7.19 12.96 5.73L12 0ZM8 18C4.69 18 2 15.31 2 12C2 8.69 4.69 6 8 6C11.31 6 14 8.69 14 12C14 15.31 11.31 18 8 18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default WatchOff;
