import React from "react";
import { withIcon } from "../../hoc";

const GppGood = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.4, 0) scale(1.2)">
        <path
          d="M8 0L0 3V9.09C0 14.14 3.41 18.85 8 20C12.59 18.85 16 14.14 16 9.09V3L8 0ZM14 9.09C14 13.09 11.45 16.79 8 17.92C4.55 16.79 2 13.1 2 9.09V4.31L8 2.19L14 4.31V9.09ZM4.82 8.59L3.4 10L6.94 13.54L12.6 7.88L11.19 6.47L6.95 10.71L4.82 8.59Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default GppGood;
