import React from "react";
import { withIcon } from "../../hoc";

const GMobiledata = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.2, 0) scale(2.4)">
        <path
          d="M5 4V6H7V8H2V2H9C9 0.9 8.1 0 7 0H2C0.9 0 0 0.9 0 2V8C0 9.1 0.9 10 2 10H7C8.1 10 9 9.1 9 8V4H5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default GMobiledata;
