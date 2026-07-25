import React from "react";
import { withIcon } from "../../hoc";

const PropaneTank = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.4, 0) scale(1.2)">
        <path
          d="M13 4.14V2C13 0.9 12.1 0 11 0H5C3.9 0 3 0.9 3 2V4.14C1.28 4.59 0 6.14 0 8V16C0 18.21 1.79 20 4 20H12C14.21 20 16 18.21 16 16V8C16 6.14 14.72 4.59 13 4.14ZM5 2H11V4H9C9 3.45 8.55 3 8 3C7.45 3 7 3.45 7 4H5V2ZM4 6H12C13.1 6 14 6.9 14 8V11H2V8C2 6.9 2.9 6 4 6ZM12 18H4C2.9 18 2 17.1 2 16V13H14V16C14 17.1 13.1 18 12 18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PropaneTank;
