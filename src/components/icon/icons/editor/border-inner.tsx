import React from "react";
import { withIcon } from "../../hoc";

const BorderInner = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M0 18H2V16H0V18ZM4 18H6V16H4V18ZM2 4H0V6H2V4ZM0 14H2V12H0V14ZM6 0H4V2H6V0ZM2 0H0V2H2V0ZM14 0H12V2H14V0ZM16 6H18V4H16V6ZM16 0V2H18V0H16ZM12 18H14V16H12V18ZM10 0H8V8H0V10H8V18H10V10H18V8H10V0ZM16 18H18V16H16V18ZM16 14H18V12H16V14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BorderInner;
