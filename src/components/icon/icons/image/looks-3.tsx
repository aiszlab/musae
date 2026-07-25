import React from "react";
import { withIcon } from "../../hoc";

const Looks3 = withIcon(({ size }) => {
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
          d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16ZM12 12V10.5C12 9.67 11.33 9 10.5 9C11.33 9 12 8.33 12 7.5V6C12 4.89 11.1 4 10 4H6V6H10V8H8V10H10V12H6V14H10C11.1 14 12 13.11 12 12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Looks3;
