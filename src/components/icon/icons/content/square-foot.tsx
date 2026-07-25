import React from "react";
import { withIcon } from "../../hoc";

const SquareFoot = withIcon(({ size }) => {
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
          d="M13.66 13.66L12.6 14.72L11.89 14.01L12.95 12.95L11.01 11.01L9.95 12.07L9.24 11.36L10.3 10.3L8.36 8.36L7.3 9.42L6.59 8.71L7.65 7.65L5.7 5.7L4.64 6.76L3.93 6.05L4.99 4.99L3.05 3.05L1.99 4.11L1.28 3.4L2.34 2.34L0 0V14C0 15.1 0.9 16 2 16H16L13.66 13.66ZM3 13V7.24L8.76 13H3Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SquareFoot;
