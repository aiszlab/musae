import React from "react";
import { withIcon } from "../../hoc";

const CreditScore = withIcon(({ size }) => {
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
          d="M18 0H2C0.89 0 0.00999999 0.89 0.00999999 2L0 14C0 15.11 0.89 16 2 16H7V14H2V8H20V2C20 0.89 19.11 0 18 0ZM18 4H2V2H18V4ZM12.93 15.17L10.1 12.34L8.69 13.75L12.93 18L20 10.93L18.59 9.52L12.93 15.17Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CreditScore;
