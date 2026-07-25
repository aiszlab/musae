import React from "react";
import { withIcon } from "../../hoc";

const Score = withIcon(({ size }) => {
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
          d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2L6 12L10 16L16 10V16ZM16 7.5L10 13.5L6 9.5L2 13.5V2H16V7.5ZM10.5 6V3H9V9H10.5V6ZM14.2 9L12.2 6L14.2 3H12.5L10.5 6L12.5 9H14.2ZM8 7.5H5.5V6.75H8V3H4V4.5H6.5V5.25H4V9H8V7.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Score;
