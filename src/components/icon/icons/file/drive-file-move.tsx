import React from "react";
import { withIcon } from "../../hoc";

const DriveFileMove = withIcon(({ size }) => {
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
          d="M18 2H10L8 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V4C20 2.9 19.1 2 18 2ZM18 14H2V2H7.17L9.17 4H18V14ZM10.16 8H6V10H10.16L8.57 11.59L9.99 13L14 9.01L9.99 5L8.58 6.41L10.16 8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DriveFileMove;
