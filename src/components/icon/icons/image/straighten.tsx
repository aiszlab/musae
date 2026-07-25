import React from "react";
import { withIcon } from "../../hoc";

const Straighten = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 5.4545) scale(1.0909)">
        <path
          d="M20 0H2C0.9 0 0 0.9 0 2V10C0 11.1 0.9 12 2 12H20C21.1 12 22 11.1 22 10V2C22 0.9 21.1 0 20 0ZM20 10H2V2H4V6H6V2H8V6H10V2H12V6H14V2H16V6H18V2H20V10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Straighten;
