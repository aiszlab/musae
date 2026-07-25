import React from "react";
import { withIcon } from "../../hoc";

const CloudQueue = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4) scale(1)">
        <path
          d="M19.35 6.04C18.67 2.59 15.64 0 12 0C9.11 0 6.6 1.64 5.35 4.04C2.34 4.36 0 6.91 0 10C0 13.31 2.69 16 6 16H19C21.76 16 24 13.76 24 11C24 8.36 21.95 6.22 19.35 6.04ZM19 14H6C3.79 14 2 12.21 2 10C2 7.79 3.79 6 6 6H6.71C7.37 3.69 9.48 2 12 2C15.04 2 17.5 4.46 17.5 7.5V8H19C20.66 8 22 9.34 22 11C22 12.66 20.66 14 19 14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CloudQueue;
