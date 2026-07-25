import React from "react";
import { withIcon } from "../../hoc";

const CurrencyYuan = withIcon(({ size }) => {
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
          d="M8.28 9H13V11H8V18H6V11H1V9H5.72L0 0H2.37L7 7.29L11.63 0H14L8.28 9Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CurrencyYuan;
