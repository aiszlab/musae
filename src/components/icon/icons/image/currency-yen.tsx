import React from "react";
import { withIcon } from "../../hoc";

const CurrencyYen = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.6667, 0) scale(1.3333)">
        <path
          d="M8.92 8H13V10H8V12H13V14H8V18H6V14H1V12H6V10H1V8H5.08L0 0H2.37L7 7.29L11.63 0H14L8.92 8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CurrencyYen;
