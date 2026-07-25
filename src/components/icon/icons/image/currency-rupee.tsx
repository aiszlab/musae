import React from "react";
import { withIcon } from "../../hoc";

const CurrencyRupee = withIcon(({ size }) => {
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
          d="M7.66 4C7.1 2.82 5.9 2 4.5 2H0V0H12V2H8.74C9.22 2.58 9.58 3.26 9.79 4H12V6H9.98C9.73 8.8 7.37 11 4.5 11H3.77L10.5 18H7.73L1 11V9H4.5C6.26 9 7.72 7.7 7.96 6H0V4H7.66Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CurrencyRupee;
