import React from "react";
import { withIcon } from "../../hoc";

const ShowChart = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4.212) scale(1.2)">
        <path
          d="M1.5 12.98L7.5 6.97L11.5 10.97L20 1.41L18.59 0L11.5 7.97L7.5 3.97L0 11.48L1.5 12.98Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ShowChart;
