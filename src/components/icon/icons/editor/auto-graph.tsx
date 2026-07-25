import React from "react";
import { withIcon } from "../../hoc";

const AutoGraph = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.9091) scale(1.0909)">
        <path
          d="M13.06 7.94L11 7L13.06 6.06L14 4L14.94 6.06L17 7L14.94 7.94L14 10L13.06 7.94ZM3 12L3.94 9.94L6 9L3.94 8.06L3 6L2.06 8.06L0 9L2.06 9.94L3 12ZM7.5 7L8.59 4.59L11 3.5L8.59 2.41L7.5 0L6.41 2.41L4 3.5L6.41 4.59L7.5 7ZM3.5 18.5L9.5 12.49L13.5 16.49L22 6.93L20.59 5.52L13.5 13.49L9.5 9.49L2 17L3.5 18.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AutoGraph;
