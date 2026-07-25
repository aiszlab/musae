import React from "react";
import { withIcon } from "../../hoc";

const HomeMini = withIcon(({ size }) => {
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
          d="M10 0C2.19 0 0 4.48 0 7C0 10.86 3.13 14 6.99 14H13.01C15.7 14 20 11.92 20 7C20 7 20 0 10 0ZM10 2C17.64 2 17.99 6.51 18 7H2C2 6.8 2.09 2 10 2ZM12.86 12H7.14C5.04 12 3.22 10.76 2.43 9H17.58C16.78 10.76 14.96 12 12.86 12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default HomeMini;
