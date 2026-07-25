import React from "react";
import { withIcon } from "../../hoc";

const SsidChart = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M18 2.47L9 9L4.62 4.62L0 8V5.52L4.83 2L9.21 6.38L18 0V2.47ZM18 12H13.3L9.13 15.34L3 9.41L0 11.54V14L2.8 12L9 18L14 14H18V12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SsidChart;
