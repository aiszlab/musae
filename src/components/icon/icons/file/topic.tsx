import React from "react";
import { withIcon } from "../../hoc";

const Topic = withIcon(({ size }) => {
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
          d="M18 2H10L8 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18.77C19.45 16 20 15.44 20 14.77V4C20 2.9 19.1 2 18 2ZM18 14H2V2H7.17L9.17 4H18V14ZM16 8H4V6H16V8ZM12 12H4V10H12V12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Topic;
