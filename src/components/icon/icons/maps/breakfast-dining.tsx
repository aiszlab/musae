import React from "react";
import { withIcon } from "../../hoc";

const BreakfastDining = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.2) scale(1.2)">
        <path
          d="M16 0H4C1.79 0 0 1.79 0 4C0 5.48 0.81 6.75 2 7.45V16C2 17.1 2.9 18 4 18H16C17.1 18 18 17.1 18 16V7.45C19.19 6.76 20 5.48 20 4C20 1.79 18.21 0 16 0ZM17 5.72L16 6.3V16H4V6.31L3.01 5.73C2.38 5.35 2 4.71 2 4C2 2.9 2.9 2 4 2H16C17.1 2 18 2.9 18 4C18 4.71 17.62 5.36 17 5.72Z"
          fill="currentColor"
        />
        <path
          d="M10.71 6.29C10.51 6.1 10.26 6 10 6C9.74 6 9.49 6.1 9.29 6.29L6.29 9.29C5.9 9.68 5.9 10.31 6.29 10.7L9.29 13.7C9.49 13.9 9.74 14 10 14C10.26 14 10.51 13.9 10.71 13.71L13.71 10.71C14.1 10.32 14.1 9.69 13.71 9.3L10.71 6.29ZM10 11.58L8.41 10L10 8.41L11.59 10L10 11.58Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BreakfastDining;
