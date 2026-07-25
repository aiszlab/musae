import React from "react";
import { withIcon } from "../../hoc";

const CallSplit = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.5)">
        <path
          d="M10 0L12.29 2.29L9.41 5.17L10.83 6.59L13.71 3.71L16 6V0H10ZM6 0H0V6L2.29 3.71L7 8.41V16H9V7.59L3.71 2.29L6 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CallSplit;
