import React from "react";
import { withIcon } from "../../hoc";

const Headphones = withIcon(({ size }) => {
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
          d="M9 0C4.03 0 0 4.03 0 9V16C0 17.1 0.9 18 2 18H6V10H2V9C2 5.13 5.13 2 9 2C12.87 2 16 5.13 16 9V10H12V18H16C17.1 18 18 17.1 18 16V9C18 4.03 13.97 0 9 0ZM4 12V16H2V12H4ZM16 16H14V12H16V16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Headphones;
