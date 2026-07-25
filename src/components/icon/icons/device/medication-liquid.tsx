import React from "react";
import { withIcon } from "../../hoc";

const MedicationLiquid = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.7143) scale(1.1429)">
        <path d="M13 0H1V2H13V0Z" fill="currentColor" />
        <path
          d="M0 18H14V3H0V18ZM3 9H5.5V6.5H8.5V9H11V12H8.5V14.5H5.5V12H3V9Z"
          fill="currentColor"
        />
        <path
          d="M18 3C16.32 3 15 4.76 15 7C15 8.77 15.83 10.22 17 10.76V18H19V10.76C20.17 10.22 21 8.77 21 7C21 4.76 19.68 3 18 3Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MedicationLiquid;
