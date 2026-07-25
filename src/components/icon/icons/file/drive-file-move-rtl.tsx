import React from "react";
import { withIcon } from "../../hoc";

const DriveFileMoveRtl = withIcon(({ size }) => {
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
          d="M18 2H10L8 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V4C20 2.9 19.1 2 18 2ZM18 14H2V2H7.17L9.17 4H18V14ZM11.41 11.59L10 13L6 9L10 5L11.41 6.41L9.83 8H14V10H9.83L11.41 11.59Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DriveFileMoveRtl;
