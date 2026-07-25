import React from "react";
import { withIcon } from "../../hoc";

const InsertComment = withIcon(({ size }) => {
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
          d="M18 2V15.17L16.83 14H2V2H18ZM18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H16L20 20V2C20 0.9 19.1 0 18 0ZM16 10H4V12H16V10ZM16 7H4V9H16V7ZM16 4H4V6H16V4Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default InsertComment;
