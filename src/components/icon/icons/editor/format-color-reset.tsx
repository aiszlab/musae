import React from "react";
import { withIcon } from "../../hoc";

const FormatColorReset = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.2917, 0) scale(1.3385)">
        <path
          d="M8 3.16C9.53 5.16 11.08 7.59 11.71 9.4L13.94 11.63C13.97 11.36 14 11.08 14 10.8C14 6.82 8 0 8 0C8 0 6.82 1.35 5.5 3.19L6.94 4.63C7.28 4.12 7.64 3.63 8 3.16ZM1.41 1.94L0 3.35L3.32 6.67C2.55 8.13 2 9.59 2 10.8C2 14.11 4.69 16.8 8 16.8C9.52 16.8 10.9 16.23 11.95 15.3L14.58 17.93L16 16.52L1.41 1.94ZM8 14.8C5.79 14.8 4 13.01 4 10.8C4 10.11 4.32 9.18 4.81 8.16L10.53 13.88C9.83 14.44 8.96 14.8 8 14.8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FormatColorReset;
