import React from "react";
import { withIcon } from "../../hoc";

const RailwayAlert = withIcon(({ size }) => {
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
          d="M8 16C8.82843 16 9.5 15.3284 9.5 14.5C9.5 13.6716 8.82843 13 8 13C7.17157 13 6.5 13.6716 6.5 14.5C6.5 15.3284 7.17157 16 8 16Z"
          fill="currentColor"
        />
        <path
          d="M2 10V7H9.29C9.1 6.37 9 5.7 9 5H2.43C3.33 4.23 5.71 3.92 9.08 4.02C9.18 3.32 9.38 2.65 9.67 2.03C0.97 1.67 0 4.02 0 6V15.5C0 17.43 1.57 19 3.5 19L2 20V21H14V20L12.5 19C14.43 19 16 17.43 16 15.5V12C14.09 12 12.37 11.24 11.11 10H2ZM14 15.5C14 16.33 13.33 17 12.5 17H3.5C2.67 17 2 16.33 2 15.5V12H14V15.5Z"
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

export default RailwayAlert;
