import React from "react";
import { withIcon } from "../../hoc";

const SixtyFpsSelect = withIcon(({ size }) => {
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
          d="M15 2V8H12V2H15ZM15 0H12C10.9 0 10 0.9 10 2V8C10 9.1 10.9 10 12 10H15C16.1 10 17 9.1 17 8V2C17 0.9 16.1 0 15 0ZM8 2V0H3C1.9 0 1 0.9 1 2V8C1 9.1 1.9 10 3 10H6C7.1 10 8 9.1 8 8V6C8 4.9 7.1 4 6 4H3V2H8ZM6 6V8H3V6H6ZM2 18H0V13H2V18ZM6 18H4V13H6V18ZM10 18H8V13H10V18ZM18 18H12V13H18V18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SixtyFpsSelect;
