import React from "react";
import { withIcon } from "../../hoc";

const RotateLeft = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.9017, 0) scale(1.2678)">
        <path
          d="M3.04 7.53L1.63 6.11C0.73 7.27 0.17 8.61 0 10H2.02C2.16 9.13 2.51 8.28 3.04 7.53ZM2.02 12H0C0.17 13.39 0.72 14.73 1.62 15.89L3.03 14.47C2.51 13.72 2.16 12.88 2.02 12ZM3.03 17.32C4.19 18.22 5.54 18.76 6.93 18.93V16.9C6.06 16.75 5.22 16.41 4.47 15.87L3.03 17.32ZM8.93 3.07V0L4.38 4.55L8.93 9V5.09C11.77 5.57 13.93 8.03 13.93 11C13.93 13.97 11.77 16.43 8.93 16.91V18.93C12.88 18.44 15.93 15.08 15.93 11C15.93 6.92 12.88 3.56 8.93 3.07Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default RotateLeft;
