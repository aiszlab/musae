import React from "react";
import { withIcon } from "../../hoc";

const Keyboard = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.6) scale(1.2)">
        <path
          d="M18 2V12H2V2H18ZM18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 12C0 13.1 0.9 14 2 14H18C19.1 14 20 13.1 20 12V2C20 0.9 19.1 0 18 0ZM9 3H11V5H9V3ZM9 6H11V8H9V6ZM6 3H8V5H6V3ZM6 6H8V8H6V6ZM3 6H5V8H3V6ZM3 3H5V5H3V3ZM6 9H14V11H6V9ZM12 6H14V8H12V6ZM12 3H14V5H12V3ZM15 6H17V8H15V6ZM15 3H17V5H15V3Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Keyboard;
