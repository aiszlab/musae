import React from "react";
import { withIcon } from "../../hoc";

const Medication = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.6667, 0) scale(1.3333)">
        <path
          d="M5.5 12H3V9H5.5V6.5H8.5V9H11V12H8.5V14.5H5.5V12ZM14 5V16C14 17.1 13.1 18 12 18H2C0.9 18 0 17.1 0 16V5C0 3.9 0.9 3 2 3H12C13.1 3 14 3.9 14 5ZM12 5H2V16H12V5ZM13 0H1V2H13V0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Medication;
