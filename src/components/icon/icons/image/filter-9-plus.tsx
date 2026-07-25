import React from "react";
import { withIcon } from "../../hoc";

const Filter9Plus = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.0909)">
        <path
          d="M2 4H0V20C0 21.1 0.9 22 2 22H18V20H2V4ZM13 11V7C13 5.89 12.1 5 11 5H10C8.9 5 8 5.89 8 7V8C8 9.11 8.9 10 10 10H11V11H8V13H11C12.1 13 13 12.11 13 11ZM10 8V7H11V8H10ZM20 0H6C4.9 0 4 0.9 4 2V16C4 17.1 4.9 18 6 18H20C21.1 18 22 17.1 22 16V2C22 0.9 21.1 0 20 0ZM20 8H18V6H16V8H14V10H16V12H18V10H20V16H6V2H20V8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Filter9Plus;
