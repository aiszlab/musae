import React from "react";
import { withIcon } from "../../hoc";

const VerticalAlignCenter = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(3.2727, 0) scale(1.0909)">
        <path
          d="M4 18H7V22H9V18H12L8 14L4 18ZM12 4H9V0H7V4H4L8 8L12 4ZM0 10V12H16V10H0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default VerticalAlignCenter;
