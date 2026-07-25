import React from "react";
import { withIcon } from "../../hoc";

const Forward = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.5)">
        <path
          d="M10 4.83L13.17 8L10 11.17V10H2V6H10V4.83ZM8 0V4H0V12H8V16L16 8L8 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Forward;
