import React from "react";
import { withIcon } from "../../hoc";

const HdrStrong = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 5.4545) scale(1.0909)">
        <path
          d="M16 0C12.69 0 10 2.69 10 6C10 9.31 12.69 12 16 12C19.31 12 22 9.31 22 6C22 2.69 19.31 0 16 0ZM4 2C1.79 2 0 3.79 0 6C0 8.21 1.79 10 4 10C6.21 10 8 8.21 8 6C8 3.79 6.21 2 4 2ZM4 8C2.9 8 2 7.1 2 6C2 4.9 2.9 4 4 4C5.1 4 6 4.9 6 6C6 7.1 5.1 8 4 8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default HdrStrong;
