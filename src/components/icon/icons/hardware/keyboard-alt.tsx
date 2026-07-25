import React from "react";
import { withIcon } from "../../hoc";

const KeyboardAlt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.7273) scale(1.0909)">
        <path
          d="M20 0H2C0.9 0 0 0.9 0 2V15C0 16.1 0.9 17 2 17H20C21.1 17 22 16.1 22 15V2C22 0.9 21.1 0 20 0ZM20 15H2V2H20V15ZM8 4H10V6H8V4ZM4 4H6V6H4V4ZM7 12H15V13H7V12ZM12 4H14V6H12V4ZM8 8H10V10H8V8ZM4 8H6V10H4V8ZM12 8H14V10H12V8ZM16 4H18V6H16V4ZM16 8H18V10H16V8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default KeyboardAlt;
