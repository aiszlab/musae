import React from "react";
import { withIcon } from "../../hoc";

const Factory = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M20 20H0V8L7 5V7L12 5V8H15L16 0H19L20 8V20ZM10 7.95L5 9.95V8L2 9.32V18H18V10H10V7.95ZM9 16H11V12H9V16ZM5 16H7V12H5V16ZM15 12H13V16H15V12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Factory;
