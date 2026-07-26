import React from "react";
import { withIcon } from "../../hoc";

const IconWaterfallChart = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 4H21V20H18V4ZM3 13H6V20H3V13ZM14 4H17V7H14V4ZM10 5H13V9H10V5ZM7 10H10V14H7V10Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconWaterfallChart;
