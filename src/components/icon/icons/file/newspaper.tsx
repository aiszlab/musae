import React from "react";
import { withIcon } from "../../hoc";

const Newspaper = withIcon(({ size }) => {
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
          d="M20 0L18.33 1.67L16.67 0L15 1.67L13.33 0L11.67 1.67L10 0L8.33 1.67L6.67 0L5 1.67L3.33 0L1.67 1.67L0 0V16C0 17.1 0.9 18 2 18H18C19.1 18 20 17.1 20 16V0ZM9 16H2V10H9V16ZM18 16H11V14H18V16ZM18 12H11V10H18V12ZM18 8H2V5H18V8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Newspaper;
