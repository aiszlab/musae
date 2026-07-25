import React from "react";
import { withIcon } from "../../hoc";

const CurrencyBitcoin = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(3.3333, 0) scale(1.3333)">
        <path
          d="M11.06 8.57C11.65 7.88 12 6.98 12 6C12 4.14 10.73 2.57 9 2.13V0H7V2H5V0H3V2H0V4H2V14H0V16H3V18H5V16H7V18H9V16C11.21 16 13 14.21 13 12C13 10.55 12.22 9.27 11.06 8.57ZM4 4H8C9.1 4 10 4.9 10 6C10 7.1 9.1 8 8 8H4V4ZM9 14H4V10H9C10.1 10 11 10.9 11 12C11 13.1 10.1 14 9 14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CurrencyBitcoin;
