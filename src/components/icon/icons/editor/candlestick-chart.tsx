import React from "react";
import { withIcon } from "../../hoc";

const CandlestickChart = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.5, 0) scale(1.5)">
        <path d="M4 0H2V2H0V14H2V16H4V14H6V2H4V0ZM4 12H2V4H4V12Z" fill="currentColor" />
        <path d="M14 4H12V0H10V4H8V11H10V16H12V11H14V4ZM12 9H10V6H12V9Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default CandlestickChart;
