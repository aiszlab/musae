import React from "react";
import { withIcon } from "../../hoc";

const VerticalShadesClosed = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.2) scale(1.2)">
        <path
          d="M18 16V0H2V16H0V18H20V16H18ZM11 2H12.5V16H11V2ZM9 16H7.5V2H9V16ZM4 2H5.5V16H4V2ZM14.5 16V2H16V16H14.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default VerticalShadesClosed;
