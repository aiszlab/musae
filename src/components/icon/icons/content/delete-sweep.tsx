import React from "react";
import { withIcon } from "../../hoc";

const DeleteSweep = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.4) scale(1.2)">
        <path
          d="M13 12H17V14H13V12ZM13 4H20V6H13V4ZM13 8H19V10H13V8ZM1 14C1 15.1 1.9 16 3 16H9C10.1 16 11 15.1 11 14V4H1V14ZM3 6H9V14H3V6ZM8 0H4L3 1H0V3H12V1H9L8 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DeleteSweep;
