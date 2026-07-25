import React from "react";
import { withIcon } from "../../hoc";

const ConnectedTv = withIcon(({ size }) => {
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
          d="M18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H6V18H14V16H18C19.1 16 19.99 15.1 19.99 14L20 2C20 0.9 19.1 0 18 0ZM18 14H2V2H18V14ZM3 11V13H5C5 11.89 4.11 11 3 11ZM3 8V9.43C4.97 9.43 6.57 11.03 6.57 13H8C8 10.24 5.76 8 3 8ZM3 5V6.45C6.61 6.45 9.55 9.38 9.55 13H11C11 8.58 7.41 5 3 5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ConnectedTv;
