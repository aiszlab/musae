import React from "react";
import { withIcon } from "../../hoc";

const PivotTableChart = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2632)">
        <path
          d="M18 2C18 0.9 17.1 0 16 0H7V5H18V2ZM0 16C0 17.1 0.9 18 2 18H5V7H0V16ZM0 2V5H5V0H2C0.9 0 0 0.9 0 2ZM15 5.99L11 10L12.41 11.41L14 9.81V12C14 13.1 13.1 14 12 14H9.83L11.42 12.41L10 11L6 15L10 19L11.41 17.59L9.83 16H12C14.21 16 16 14.21 16 12V9.82L17.59 11.42L19 10L15 5.99Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PivotTableChart;
