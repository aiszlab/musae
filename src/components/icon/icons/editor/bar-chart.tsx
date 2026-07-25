import React from "react";
import { withIcon } from "../../hoc";

const BarChart = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.5)">
        <path d="M4 5H0V16H4V5Z" fill="currentColor" />
        <path d="M16 9H12V16H16V9Z" fill="currentColor" />
        <path d="M10 0H6V16H10V0Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default BarChart;
