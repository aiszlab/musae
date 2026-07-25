import React from "react";
import { withIcon } from "../../hoc";

const Synagogue = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.1818) scale(1.0909)">
        <path
          d="M19 1C17.34 1 16 2.34 16 4V4.29L11 0L6 4.29V4C6 2.34 4.66 1 3 1C1.34 1 0 2.34 0 4V18H10V13C10 12.45 10.45 12 11 12C11.55 12 12 12.45 12 13V18H22V4C22 2.34 20.66 1 19 1ZM19 3C19.55 3 20 3.45 20 4V5H18V4C18 3.45 18.45 3 19 3ZM3 3C3.55 3 4 3.45 4 4V5H2V4C2 3.45 2.45 3 3 3ZM2 16V7H4V16H2ZM16 16H14V13C14 11.35 12.65 10 11 10C9.35 10 8 11.35 8 13V16H6V6.92L11 2.63L16 6.92V16ZM18 16V7H20V16H18Z"
          fill="currentColor"
        />
        <path
          d="M11 8.5C11.8284 8.5 12.5 7.82843 12.5 7C12.5 6.17157 11.8284 5.5 11 5.5C10.1716 5.5 9.5 6.17157 9.5 7C9.5 7.82843 10.1716 8.5 11 8.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Synagogue;
