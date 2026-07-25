import React from "react";
import { withIcon } from "../../hoc";

const Polyline = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.2, 0) scale(1.2)">
        <path
          d="M12 14V15.26L6 12.26V9.09L8.7 6H13V0H7V4.9L4.3 8H0V14H5L12 17.5V20H18V14H12ZM9 2H11V4H9V2ZM4 12H2V10H4V12ZM16 18H14V16H16V18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Polyline;
