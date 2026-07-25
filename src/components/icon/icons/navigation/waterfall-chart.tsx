import React from "react";
import { withIcon } from "../../hoc";

const WaterfallChart = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.3333) scale(1.3333)">
        <path
          d="M15 0H18V16H15V0ZM0 9H3V16H0V9ZM11 0H14V3H11V0ZM7 1H10V5H7V1ZM4 6H7V10H4V6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default WaterfallChart;
