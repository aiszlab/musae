import React from "react";
import { withIcon } from "../../hoc";

const ShortText = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 7.5) scale(1.5)">
        <path d="M0 0H16V2H0V0ZM0 4H10V6H0V4Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default ShortText;
