import React from "react";
import { withIcon } from "../../hoc";

const IconBarChart = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M8 9H4V20H8V9Z" fill="currentColor" />
      <path d="M20 13H16V20H20V13Z" fill="currentColor" />
      <path d="M14 4H10V20H14V4Z" fill="currentColor" />
    </svg>
  );
});

export default IconBarChart;
