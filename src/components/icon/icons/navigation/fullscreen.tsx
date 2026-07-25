import React from "react";
import { withIcon } from "../../hoc";

const Fullscreen = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.7143)">
        <path
          d="M2 9H0V14H5V12H2V9ZM0 5H2V2H5V0H0V5ZM12 12H9V14H14V9H12V12ZM9 0V2H12V5H14V0H9Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Fullscreen;
