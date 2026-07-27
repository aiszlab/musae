import React from "react";
import { withIcon } from "../../hoc";

const IconStackedBarChart = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M8 9H4V20H8V9Z" fill="currentColor" />
      <path d="M8 4H4V8H8V4Z" fill="currentColor" />
      <path d="M14 7H10V11H14V7Z" fill="currentColor" />
      <path d="M20 10H16V14H20V10Z" fill="currentColor" />
      <path d="M20 15H16V20H20V15Z" fill="currentColor" />
      <path d="M14 12H10V20H14V12Z" fill="currentColor" />
    </svg>
  );
});

export default IconStackedBarChart;
