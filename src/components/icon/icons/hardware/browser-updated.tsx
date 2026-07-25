import React from "react";
import { withIcon } from "../../hoc";

const BrowserUpdated = withIcon(({ size }) => {
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
          d="M20 10V13C20 14.1 19.1 15 18 15H15L16 16V18H4V16L5 15H2C0.9 15 0 14.1 0 13V2C0 0.9 0.9 0 2 0H10V2H2V13H18V10H20ZM13 12L8 7L9.41 5.59L12 8.17V0H14V8.17L16.59 5.59L18 7L13 12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BrowserUpdated;
