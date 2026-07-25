import React from "react";
import { withIcon } from "../../hoc";

const Download = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.1176, 0) scale(1.4118)">
        <path
          d="M14 6H10V0H4V6H0L7 13L14 6ZM6 8V2H8V8H9.17L7 10.17L4.83 8H6ZM0 15H14V17H0V15Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Download;
