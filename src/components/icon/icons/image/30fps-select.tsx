import React from "react";
import { withIcon } from "../../hoc";

const ThirtyFpsSelect = withIcon(({ size }) => {
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
          d="M1 0V2H6V4H2V6H6V8H1V10H6C7.1 10 8 9.1 8 8V6.5C8 5.67 7.83 5 7 5C7.83 5 8 4.33 8 3.5V2C8 0.9 7.1 0 6 0H1ZM15 0C16.1 0 17 0.9 17 2V8C17 9.1 16.1 10 15 10H12C10.9 10 10 9.1 10 8V2C10 0.9 10.9 0 12 0H15ZM15 2H12V8H15V2ZM2 18H0V13H2V18ZM6 18H4V13H6V18ZM10 18H8V13H10V18ZM18 18H12V13H18V18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ThirtyFpsSelect;
