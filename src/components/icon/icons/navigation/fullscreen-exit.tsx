import React from "react";
import { withIcon } from "../../hoc";

const FullscreenExit = withIcon(({ size }) => {
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
          d="M0 11H3V14H5V9H0V11ZM3 3H0V5H5V0H3V3ZM9 14H11V11H14V9H9V14ZM11 3V0H9V5H14V3H11Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FullscreenExit;
