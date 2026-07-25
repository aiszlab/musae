import React from "react";
import { withIcon } from "../../hoc";

const BusAlert = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.1429)">
        <path
          d="M4.5 16C5.32843 16 6 15.3284 6 14.5C6 13.6716 5.32843 13 4.5 13C3.67157 13 3 13.6716 3 14.5C3 15.3284 3.67157 16 4.5 16Z"
          fill="currentColor"
        />
        <path
          d="M11.5 16C12.3284 16 13 15.3284 13 14.5C13 13.6716 12.3284 13 11.5 13C10.6716 13 10 13.6716 10 14.5C10 15.3284 10.6716 16 11.5 16Z"
          fill="currentColor"
        />
        <path
          d="M2 10V7H9.29C9.1 6.37 9 5.7 9 5H2.43C3.26 4.29 5.41 3.91 9.08 4.02C9.18 3.32 9.38 2.65 9.67 2.03C0.97 1.67 0 4.02 0 6V15.5C0 16.45 0.38 17.31 1 17.94V20C1 20.55 1.45 21 2 21H3C3.55 21 4 20.55 4 20V19H12V20C12 20.55 12.45 21 13 21H14C14.55 21 15 20.55 15 20V17.94C15.62 17.31 16 16.45 16 15.5V12C14.09 12 12.37 11.24 11.11 10H2ZM14 15C14 16.1 13.1 17 12 17H4C2.9 17 2 16.1 2 15V12H14V15Z"
          fill="currentColor"
        />
        <path
          d="M16 0C13.24 0 11 2.24 11 5C11 7.76 13.24 10 16 10C18.76 10 21 7.76 21 5C21 2.24 18.76 0 16 0ZM16.5 8H15.5V7H16.5V8ZM16.5 6H15.5V2H16.5V6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BusAlert;
