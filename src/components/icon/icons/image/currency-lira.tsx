import React from "react";
import { withIcon } from "../../hoc";

const CurrencyLira = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(4, 0) scale(1.3333)">
        <path
          d="M3 5.76V0H5V4.51L9 2V4.36L5 6.87L5.01 9.22L9 6.72V9.08L5 11.59V16C7.76 16 10 13.76 10 11H12C12 14.87 8.87 18 5 18H3V12.84L0 14.72V12.36L3 10.48V8.12L0 10V7.64L3 5.76Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CurrencyLira;
