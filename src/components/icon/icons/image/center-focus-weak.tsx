import React from "react";
import { withIcon } from "../../hoc";

const CenterFocusWeak = withIcon(({ size }) => {
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
          d="M2 12H0V16C0 17.1 0.9 18 2 18H6V16H2V12ZM2 2H6V0H2C0.9 0 0 0.9 0 2V6H2V2ZM9 5C6.79 5 5 6.79 5 9C5 11.21 6.79 13 9 13C11.21 13 13 11.21 13 9C13 6.79 11.21 5 9 5ZM9 11C7.9 11 7 10.1 7 9C7 7.9 7.9 7 9 7C10.1 7 11 7.9 11 9C11 10.1 10.1 11 9 11ZM16 0H12V2H16V6H18V2C18 0.9 17.1 0 16 0ZM16 16H12V18H16C17.1 18 18 17.1 18 16V12H16V16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CenterFocusWeak;
