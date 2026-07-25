import React from "react";
import { withIcon } from "../../hoc";

const Square = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path d="M0 0V18H18V0H0ZM16 16H2V2H16V16Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default Square;
