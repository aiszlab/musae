import React from "react";
import { withIcon } from "../../hoc";

const Schema = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.7273, 0) scale(1.0909)">
        <path
          d="M10 8V10H7V8H4.5V6H7V0H0V6H2.5V8H0V14H2.5V16H0V22H7V16H4.5V14H7V12H10V14H17V8H10ZM2 2H5V4H2V2ZM5 20H2V18H5V20ZM5 12H2V10H5V12ZM15 12H12V10H15V12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Schema;
