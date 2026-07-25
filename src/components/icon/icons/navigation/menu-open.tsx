import React from "react";
import { withIcon } from "../../hoc";

const MenuOpen = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4) scale(1.3333)">
        <path
          d="M0 12H13V10H0V12ZM0 7H10V5H0V7ZM0 0V2H13V0H0ZM18 9.59L14.42 6L18 2.41L16.59 1L11.59 6L16.59 11L18 9.59Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MenuOpen;
