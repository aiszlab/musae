import React from "react";
import { withIcon } from "../../hoc";

const CenterFocusStrong = withIcon(({ size }) => {
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
          d="M14 9C14 6.24 11.76 4 9 4C6.24 4 4 6.24 4 9C4 11.76 6.24 14 9 14C11.76 14 14 11.76 14 9ZM9 12C7.35 12 6 10.65 6 9C6 7.35 7.35 6 9 6C10.65 6 12 7.35 12 9C12 10.65 10.65 12 9 12ZM2 12H0V16C0 17.1 0.9 18 2 18H6V16H2V12ZM2 2H6V0H2C0.9 0 0 0.9 0 2V6H2V2ZM16 0H12V2H16V6H18V2C18 0.9 17.1 0 16 0ZM16 16H12V18H16C17.1 18 18 17.1 18 16V12H16V16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CenterFocusStrong;
