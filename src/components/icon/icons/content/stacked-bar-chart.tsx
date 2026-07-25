import React from "react";
import { withIcon } from "../../hoc";

const StackedBarChart = withIcon(({ size }) => {
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
        <path d="M4 0H0V4H4V0Z" fill="currentColor" />
        <path d="M10 3H6V7H10V3Z" fill="currentColor" />
        <path d="M16 6H12V10H16V6Z" fill="currentColor" />
        <path d="M16 11H12V16H16V11Z" fill="currentColor" />
        <path d="M10 8H6V16H10V8Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default StackedBarChart;
