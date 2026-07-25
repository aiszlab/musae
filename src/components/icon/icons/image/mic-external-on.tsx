import React from "react";
import { withIcon } from "../../hoc";

const MicExternalOn = withIcon(({ size }) => {
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
          d="M5.22 5C5.7 4.47 6 3.77 6 3C6 1.34 4.66 0 3 0C1.34 0 0 1.34 0 3C0 3.77 0.3 4.47 0.78 5H5.22Z"
          fill="currentColor"
        />
        <path
          d="M12 0C9.79 0 8 1.79 8 4V16C8 17.1 7.1 18 6 18C4.9 18 4 17.1 4 16H5L6 6H0L1 16H2C2 18.21 3.79 20 6 20C8.21 20 10 18.21 10 16V4C10 2.9 10.9 2 12 2C13.1 2 14 2.9 14 4V20H16V4C16 1.79 14.21 0 12 0ZM3.19 14H2.81L2.21 8H3.79L3.19 14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MicExternalOn;
