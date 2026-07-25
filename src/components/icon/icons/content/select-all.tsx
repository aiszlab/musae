import React from "react";
import { withIcon } from "../../hoc";

const SelectAll = withIcon(({ size }) => {
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
          d="M0 2H2V0C0.9 0 0 0.9 0 2ZM0 10H2V8H0V10ZM4 18H6V16H4V18ZM0 6H2V4H0V6ZM10 0H8V2H10V0ZM16 0V2H18C18 0.9 17.1 0 16 0ZM2 18V16H0C0 17.1 0.9 18 2 18ZM0 14H2V12H0V14ZM6 0H4V2H6V0ZM8 18H10V16H8V18ZM16 10H18V8H16V10ZM16 18C17.1 18 18 17.1 18 16H16V18ZM16 6H18V4H16V6ZM16 14H18V12H16V14ZM12 18H14V16H12V18ZM12 2H14V0H12V2ZM4 14H14V4H4V14ZM6 6H12V12H6V6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SelectAll;
