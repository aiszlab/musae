import React from "react";
import { withIcon } from "../../hoc";

const GppBad = withIcon(({ size }) => {
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
          d="M8 0L0 3V9.09C0 14.14 3.41 18.85 8 20C12.59 18.85 16 14.14 16 9.09V3L8 0ZM14 9.09C14 13.09 11.45 16.79 8 17.92C4.55 16.79 2 13.1 2 9.09V4.39L8 2.14L14 4.39V9.09ZM5.91 6.5L4.5 7.91L6.59 10L4.5 12.09L5.91 13.5L8 11.42L10.09 13.5L11.5 12.09L9.42 10L11.5 7.91L10.09 6.5L8 8.59L5.91 6.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default GppBad;
