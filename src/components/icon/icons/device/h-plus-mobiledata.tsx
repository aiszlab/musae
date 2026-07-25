import React from "react";
import { withIcon } from "../../hoc";

const HPlusMobiledata = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 5.3333) scale(1.3333)">
        <path
          d="M8 4H2V0H0V10H2V6H8V10H10V0H8V4ZM18 4H16V2H14V4H12V6H14V8H16V6H18V4Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default HPlusMobiledata;
