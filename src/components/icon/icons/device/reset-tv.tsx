import React from "react";
import { withIcon } from "../../hoc";

const ResetTv = withIcon(({ size }) => {
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
          d="M20 5V2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H6V18H14V16H18C19.1 16 19.99 15.1 19.99 14V9H20C20 7.9 19.1 7 18 7H10.83L12.66 5.17L11.25 3.76C7.69 7.31 8.88 6.12 7 8C9.06 10.06 7.9 8.9 11.24 12.24L12.65 10.83L10.83 9H18V14H2V2H18V5H20Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ResetTv;
