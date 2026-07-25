import React from "react";
import { withIcon } from "../../hoc";

const PriceChange = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.4) scale(1.2)">
        <path
          d="M6 13H8V12H9C9.55 12 10 11.55 10 11V8C10 7.45 9.55 7 9 7H6V6H10V4H8V3H6V4H5C4.45 4 4 4.45 4 5V8C4 8.55 4.45 9 5 9H8V10H4V12H6V13ZM18 0H2C0.89 0 0.00999999 0.89 0.00999999 2L0 14C0 15.11 0.89 16 2 16H18C19.11 16 20 15.11 20 14V2C20 0.89 19.11 0 18 0ZM18 14H2V2H18V14ZM12 6L14 4L16 6M16 10.25L14 12.25L12 10.25"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PriceChange;
