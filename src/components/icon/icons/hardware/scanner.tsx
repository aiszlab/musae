import React from "react";
import { withIcon } from "../../hoc";

const Scanner = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2) scale(1.3333)">
        <path
          d="M16.8 5.7L1.2 0L0.5 1.9L14.6 7H2C0.9 7 0 7.9 0 9V13C0 14.1 0.9 15 2 15H16C17.1 15 18 14.1 18 13V7.5C18 6.7 17.5 5.9 16.8 5.7ZM16 13H2V9H16V13ZM3 10H5V12H3V10ZM7 10H15V12H7V10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Scanner;
