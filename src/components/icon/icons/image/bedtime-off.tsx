import React from "react";
import { withIcon } from "../../hoc";

const BedtimeOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.466, 0) scale(1.165)">
        <path
          d="M7.88 2.48C7.75 3.07 7.68 3.63 7.64 4.19L9.69 6.24C9.42 4.19 9.79 2.02 10.95 0.00999999C10.83 0.00999999 10.72 0 10.6 0C8.55 0 6.67 0.61 5.1 1.65L6.56 3.11C6.98 2.87 7.42 2.65 7.88 2.48ZM0 2.21L2.27 4.48C1.22 6.06 0.61 7.96 0.61 9.99C0.61 15.51 5.09 19.99 10.61 19.99C12.65 19.99 14.53 19.36 16.11 18.32L18.39 20.6L19.8 19.19L1.42 0.8L0 2.21ZM3.74 5.95L14.66 16.87C13.45 17.59 12.06 17.99 10.61 17.99C6.2 17.99 2.61 14.4 2.61 9.99C2.61 8.51 3.03 7.14 3.74 5.95Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BedtimeOff;
