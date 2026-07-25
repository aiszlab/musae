import React from "react";
import { withIcon } from "../../hoc";

const MarkEmailRead = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.7143) scale(1.1429)">
        <path
          d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H10V14H2V4L10 9L18 4V9H20V2C20 0.9 19.1 0 18 0ZM10 7L2 2H18L10 7ZM15.34 18L11.8 14.46L13.21 13.05L15.33 15.17L19.57 10.93L21 12.34L15.34 18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MarkEmailRead;
