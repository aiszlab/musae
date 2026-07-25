import React from "react";
import { withIcon } from "../../hoc";

const QueuePlayNext = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.8261) scale(1.0435)">
        <path
          d="M20 0H2C0.89 0 0 0.89 0 2V14C0 15.1 0.89 16 2 16H7V18H15V16H17V14H2V2H20V10H22V2C22 0.89 21.1 0 20 0ZM12 7V4H10V7H7V9H10V12H12V9H15V7H12ZM23 15L18.5 19.5L17 18L20 15L17 12L18.5 10.5L23 15Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default QueuePlayNext;
