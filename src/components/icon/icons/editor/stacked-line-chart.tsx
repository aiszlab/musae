import React from "react";
import { withIcon } from "../../hoc";

const StackedLineChart = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.612) scale(1.2)">
        <path
          d="M0 17.48L7.5 9.97L11.5 13.97L18.59 6L20 7.41L11.5 16.97L7.5 12.97L1.5 18.98L0 17.48ZM1.5 12.98L7.5 6.97L11.5 10.97L20 1.41L18.59 0L11.5 7.97L7.5 3.97L0 11.48L1.5 12.98Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default StackedLineChart;
