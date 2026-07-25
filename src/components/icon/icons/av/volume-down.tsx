import React from "react";
import { withIcon } from "../../hoc";

const VolumeDown = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.875, 0) scale(1.5)">
        <path
          d="M11 3.97V12.02C12.48 11.29 13.5 9.77 13.5 8C13.5 6.23 12.48 4.71 11 3.97ZM0 5V11H4L9 16V0L4 5H0ZM7 4.83V11.17L4.83 9H2V7H4.83L7 4.83Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default VolumeDown;
