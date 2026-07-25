import React from "react";
import { withIcon } from "../../hoc";

const SportsScore = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.5, 0) scale(1.5)">
        <path
          d="M6 2H4V0H6V2ZM10 0H8V2H10V0ZM4 10H6V8H4V10ZM14 6V4H12V6H14ZM14 10V8H12V10H14ZM8 10H10V8H8V10ZM14 0H12V2H14V0ZM8 4V2H6V4H8ZM2 6V4H4V2H2V0H0V16H2V8H4V6H2ZM10 8H12V6H10V8ZM6 6V8H8V6H6ZM4 4V6H6V4H4ZM8 6H10V4H8V6ZM10 2V4H12V2H10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SportsScore;
