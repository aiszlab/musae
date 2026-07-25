import React from "react";
import { withIcon } from "../../hoc";

const Cases = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.5455) scale(1.0909)">
        <path d="M2 8H0V19C0 20.11 0.89 21 2 21H19V19H2V8Z" fill="currentColor" />
        <path
          d="M17 4V2C17 0.9 16.1 0 15 0H11C9.9 0 9 0.9 9 2V4H4V15C4 16.1 4.9 17 6 17H20C21.1 17 22 16.1 22 15V4H17ZM11 2H15V4H11V2ZM20 15H6V6H20V15Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Cases;
