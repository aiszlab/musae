import React from "react";
import { withIcon } from "../../hoc";

const Flip = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.1818, 0) scale(1.0909)">
        <path
          d="M12 20H14V18H12V20ZM16 8H18V6H16V8ZM0 4V18C0 19.1 0.9 20 2 20H6V18H2V4H6V2H2C0.9 2 0 2.9 0 4ZM16 2V4H18C18 2.9 17.1 2 16 2ZM8 22H10V0H8V22ZM16 16H18V14H16V16ZM12 4H14V2H12V4ZM16 12H18V10H16V12ZM16 20C17.1 20 18 19.1 18 18H16V20Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Flip;
